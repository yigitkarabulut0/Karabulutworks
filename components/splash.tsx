"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { bio } from "@/lib/bio";

const SESSION_KEY = "yk-splash-seen";

const splashField = [
  ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
  ". : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : .",
  ". : ///// ......... ///// ......... ///// ......... ///// ......... ///// ......... : .",
  ". : ..... @@@@ ..... >>>> ..... //// ..... @@@@ ..... >>>> ..... //// ..... @@@@ : .",
  ". : ::::: ..... ::::: ..... ::::: ..... ::::: ..... ::::: ..... ::::: ..... ::::: : .",
  ". : //// ......... //// ......... //// ......... //// ......... //// ......... //// : .",
  ". : ..... $$$$ ..... .... ..... $$$$ ..... .... ..... $$$$ ..... .... ..... $$$$ : .",
  ". : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : .",
  ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
];

const splashAscii = [
  "__   __ ___  ____ ___ _____      _  __    _    ____      _    ____  _   _ _    _   _ _____",
  "\\ \\ / /|_ _|/ ___|_ _|_   _|    | |/ /   / \\  |  _ \\    / \\  | __ )| | | | |  | | | |_   _|",
  " \\ V /  | || |  _ | |  | |      | ' /   / _ \\ | |_) |  / _ \\ |  _ \\| | | | |  | | | | | |",
  "  | |   | || |_| || |  | |      | . \\  / ___ \\|  _ <  / ___ \\| |_) | |_| | |__| |_| | | |",
  "  |_|  |___|\\____|___| |_|      |_|\\_\\/_/   \\_\\_| \\_\\/_/   \\_\\____/ \\___/|_____\\___/  |_|",
  "",
  "          .----------------------------------------------------------------.",
  "          |  YIGIT KARABULUT  ::  FULL-STACK HUMAN  ::  AI CRAFT           |",
  "          '----------------------------------------------------------------'",
  "",
  "                    < open: yigit.karabulut / mode: human >",
];

export function Splash() {
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const asciiRef = useRef<HTMLPreElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const quickMarkRef = useRef<HTMLDivElement>(null);
  const leftRuleRef = useRef<HTMLSpanElement>(null);
  const rightRuleRef = useRef<HTMLSpanElement>(null);
  const [skipped, setSkipped] = useState(false);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = rootRef.current;
    const panel = panelRef.current;
    const ascii = asciiRef.current;
    if (!root || !panel || !ascii) return;

    const seen = sessionStorage.getItem(SESSION_KEY);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const speed = isMobile ? 0.92 : 1;

    if (reduced) {
      root.style.display = "none";
      sessionStorage.setItem(SESSION_KEY, "1");
      return;
    }

    document.body.style.overflow = "hidden";

    const cleanupRoot = () => {
      document.body.style.overflow = "";
      sessionStorage.setItem(SESSION_KEY, "1");
      root.style.display = "none";
    };

    const ctx = gsap.context(() => {
      const asciiLines = ascii.querySelectorAll<HTMLSpanElement>(".splash-ascii-line");
      const asciiChars = ascii.querySelectorAll<HTMLSpanElement>(".splash-ascii-char");
      const fieldLines = root.querySelectorAll<HTMLSpanElement>(".splash-field-line");
      const fieldLineItems = Array.from(fieldLines);
      const introItems = [
        markRef.current,
        subtitleRef.current,
        nameRef.current,
      ].filter(Boolean);

      gsap.set(root, { autoAlpha: 1 });
      gsap.set(panel, { yPercent: 0 });
      gsap.set(frameRef.current, { opacity: 0, scale: 0.985 });
      gsap.set(quickMarkRef.current, { y: 12, opacity: 0 });
      gsap.set(introItems, { y: 18, opacity: 0 });
      gsap.set(fieldLines, { opacity: 0 });
      gsap.set(asciiLines, { opacity: 1 });
      gsap.set(asciiChars, { y: 10, opacity: 0, filter: "blur(5px)" });
      gsap.set([leftRuleRef.current, rightRuleRef.current], {
        scaleX: 0,
        transformOrigin: "center center",
      });

      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        onComplete: cleanupRoot,
      });
      tlRef.current = tl;

      if (seen) {
        gsap.set(frameRef.current, { borderColor: "transparent" });
        gsap.set(ascii, { opacity: 0 });
        gsap.set([markRef.current, subtitleRef.current, nameRef.current], {
          opacity: 0,
        });

        tl.to(frameRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3 * speed,
        })
          .to(quickMarkRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.45 * speed,
          })
          .to(
            quickMarkRef.current,
            {
              y: -12,
              opacity: 0,
              duration: 0.32 * speed,
              ease: "power3.in",
            },
            `+=${0.18 * speed}`
          )
          .to(
            panel,
            {
              yPercent: -100,
              duration: 0.95 * speed,
              ease: "expo.inOut",
            },
            `-=${0.08 * speed}`
          );

        return;
      }

      tl.to(frameRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.48 * speed,
      })
        .to(
          fieldLines,
          {
            opacity: 0.42,
            duration: 0.55 * speed,
            stagger: 0.025 * speed,
          },
          "-=0.42"
        )
        .to(
          [leftRuleRef.current, rightRuleRef.current],
          {
            scaleX: 1,
            duration: 0.55 * speed,
            ease: "power3.out",
          },
          "-=0.36"
        )
        .to(
          markRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.45 * speed,
          },
          "-=0.28"
        )
        .to(
          asciiChars,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.4 * speed,
            stagger: {
              each: 0.0034 * speed,
              from: "start",
            },
          },
          "-=0.22"
        )
        .to(
          titleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.35 * speed,
          },
          "-=0.18"
        )
        .to(
          subtitleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.3 * speed,
          },
          "-=0.16"
        )
        .to(
          nameRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.32 * speed,
          },
          "-=0.15"
        )
        .to({}, { duration: 0.15 * speed })
        .to(
          [ascii, ...introItems, ...fieldLineItems],
          {
            y: -12,
            opacity: 0,
            duration: 0.42 * speed,
            ease: "power3.in",
          },
          "+=0.05"
        )
        .to(
          panel,
          {
            yPercent: -100,
            duration: 0.48 * speed,
            ease: "expo.inOut",
          },
          "-=0.18"
        );
    }, root);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, []);

  const skip = () => {
    if (skipped) return;
    setSkipped(true);
    tlRef.current?.progress(1);
  };

  return (
    <div
      ref={rootRef}
      aria-hidden
      style={{ visibility: "hidden" }}
      className="fixed inset-0 z-[200] pointer-events-none"
    >
      <div
        ref={panelRef}
        className="absolute inset-0 flex items-center justify-center overflow-hidden bg-bg px-6 pointer-events-auto"
      >
        <pre
          aria-hidden
          className="splash-field mono pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none text-[11px] leading-[1.35] text-fg/20 md:block"
        >
          {splashField.map((line, index) => (
            <span key={`${line}-${index}`} className="splash-field-line block">
              {line}
            </span>
          ))}
        </pre>

        <div
          ref={frameRef}
          className="relative flex min-h-[min(620px,78svh)] w-full max-w-[1240px] flex-col items-center justify-center border-y border-line/80 py-14 text-center md:min-h-[min(680px,76svh)]"
        >
          <span
            ref={leftRuleRef}
            className="absolute left-0 top-8 hidden h-px w-[18vw] max-w-72 bg-fg/35 md:block"
          />
          <span
            ref={rightRuleRef}
            className="absolute right-0 bottom-8 hidden h-px w-[18vw] max-w-72 bg-fg/35 md:block"
          />

          <div
            ref={quickMarkRef}
            className="serif absolute inset-0 flex items-center justify-center text-fg"
            style={{ fontSize: "clamp(80px, 14vw, 220px)", lineHeight: 1 }}
          >
            YK
          </div>

          <div
            ref={markRef}
            className="mono mb-7 text-[10px] uppercase tracking-[0.34em] text-muted md:mb-8 md:text-[11px]"
          >
            YK / system entry / 2026
          </div>

          <pre
            ref={asciiRef}
            className="splash-wordmark mono select-none text-center text-[5px] leading-[1.08] text-fg min-[420px]:text-[6px] sm:text-[8px] md:text-[11px] lg:text-[13px]"
          >
            {splashAscii.map((line, index) => (
              <span key={`${line}-${index}`} className="splash-ascii-line block">
                {line
                  ? line.split("").map((char, charIndex) => (
                      <span
                        key={`${index}-${charIndex}`}
                        className="splash-ascii-char"
                      >
                        {char === " " ? "\u00a0" : char}
                      </span>
                    ))
                  : "\u00a0"}
              </span>
            ))}
          </pre>

          <h1
            ref={titleRef}
            className="sr-only"
            style={{ letterSpacing: 0 }}
          >
            Full-Stack Human
          </h1>

          <p
            ref={subtitleRef}
            className="mono mt-7 max-w-[34rem] text-balance text-[10px] uppercase leading-relaxed tracking-[0.18em] text-muted md:text-[11px]"
          >
            Product instinct. Security depth. AI-native craft.
          </p>

          <p
            ref={nameRef}
            className="serif mt-9 text-2xl leading-none text-fg md:text-4xl"
          >
            {bio.name}
          </p>
        </div>

        <button
          type="button"
          onClick={skip}
          className="mono pointer-events-auto absolute right-6 top-[max(2rem,env(safe-area-inset-top))] text-[10px] uppercase tracking-widest text-muted transition-colors hover:text-fg md:right-8 md:text-[11px]"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
