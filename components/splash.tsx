"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { bio, splashRoles } from "@/lib/bio";

const SESSION_KEY = "yk-splash-seen";

function pickRoles(pool: string[], n: number): string[] {
  // Fisher–Yates shuffle on a copy
  const a = [...pool];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

export function Splash() {
  const rootRef = useRef<HTMLDivElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const topMaskRef = useRef<HTMLDivElement>(null);
  const bottomMaskRef = useRef<HTMLDivElement>(null);
  const [skipped, setSkipped] = useState(false);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const playedRef = useRef(false);

  const sequence = useMemo(() => pickRoles(splashRoles, 3), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (playedRef.current) return; // StrictMode double-invoke guard
    playedRef.current = true;

    const root = rootRef.current;
    if (!root) return;

    const seen = sessionStorage.getItem(SESSION_KEY);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // SEEN or REDUCED MOTION → never show the splash. No flash, no fade.
    if (seen || reduced) {
      root.style.display = "none";
      sessionStorage.setItem(SESSION_KEY, "1");
      return;
    }

    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const stamp = stampRef.current!;
      const words = wordsRef.current!.querySelectorAll<HTMLDivElement>(".splash-word");
      const nameLetters = nameRef.current!.querySelectorAll<HTMLSpanElement>(".splash-name-letter");

      // 1. Set authoritative initial states BEFORE making the root visible.
      gsap.set(words, { yPercent: 110, opacity: 0 });
      gsap.set(nameLetters, { yPercent: 120 });
      gsap.set([topMaskRef.current, bottomMaskRef.current], { yPercent: 0 });
      gsap.set(stamp, { y: 12, opacity: 0 });

      // 2. NOW reveal the root — nothing inside is visible at this point.
      root.style.visibility = "visible";

      // 3. Build and play the timeline.
      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        onComplete: () => {
          document.body.style.overflow = "";
          sessionStorage.setItem(SESSION_KEY, "1");
          if (root) root.style.display = "none";
        },
      });
      tlRef.current = tl;

      tl.to(stamp, { y: 0, opacity: 1, duration: 0.5 })
        .to(stamp, { y: -12, opacity: 0, duration: 0.4 }, "+=0.2");

      words.forEach((w, i) => {
        const label = `w${i}`;
        tl.addLabel(label, "+=0")
          .to(w, { yPercent: 0, opacity: 1, duration: 0.7 }, label)
          .to(
            w,
            { yPercent: -110, opacity: 0, duration: 0.7 },
            i === words.length - 1 ? `${label}+=0.7` : `${label}+=0.55`
          );
      });

      tl.to(
        nameLetters,
        {
          yPercent: 0,
          duration: 1.1,
          stagger: 0.035,
          ease: "expo.out",
        },
        "-=0.4"
      );

      tl.to(
        topMaskRef.current,
        { yPercent: -100, duration: 1.1, ease: "expo.inOut" },
        "+=0.45"
      )
        .to(
          bottomMaskRef.current,
          { yPercent: 100, duration: 1.1, ease: "expo.inOut" },
          "<"
        )
        .to(nameRef.current, { opacity: 0, duration: 0.6 }, "<+=0.2");
    }, rootRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, []);

  const skip = () => {
    if (skipped) return;
    setSkipped(true);
    const tl = tlRef.current;
    if (tl) tl.progress(1);
  };

  const letters = bio.name.split("");

  return (
    <div
      ref={rootRef}
      aria-hidden
      // Hidden until JS sets the initial GSAP state. Prevents the
      // first-paint flash where unstyled content appears before CSS or
      // the GSAP timeline have a chance to set initial transforms.
      style={{ visibility: "hidden" }}
      className="fixed inset-0 z-[200] pointer-events-none"
    >
      <div
        ref={topMaskRef}
        className="absolute inset-x-0 top-0 h-1/2 bg-bg pointer-events-auto"
      />
      <div
        ref={bottomMaskRef}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-bg pointer-events-auto"
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          ref={stampRef}
          className="mono absolute top-8 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-widest text-fg"
          style={{ opacity: 0, transform: "translateY(12px) translateX(-50%)" }}
        >
          (YK &mdash; 2026)
        </div>

        <div
          ref={wordsRef}
          className="serif-italic relative w-full overflow-hidden text-center text-5xl text-fg md:text-7xl lg:text-8xl"
          style={{ height: "1.3em", lineHeight: 1 }}
        >
          {sequence.map((w) => (
            <div
              key={w}
              className="splash-word absolute inset-0 flex items-center justify-center"
              style={{
                lineHeight: 1,
                opacity: 0,
                transform: "translateY(110%)",
              }}
            >
              {w}.
            </div>
          ))}
        </div>

        <div
          ref={nameRef}
          className="serif absolute inset-0 flex items-center justify-center px-6 text-center text-fg"
        >
          <div
            className="text-[12vw] md:text-[10vw]"
            style={{ lineHeight: 1.05 }}
          >
            {letters.map((ch, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden"
                style={{
                  height: "1.05em",
                  lineHeight: 1,
                  verticalAlign: "bottom",
                }}
              >
                <span
                  className="splash-name-letter inline-block"
                  style={{
                    lineHeight: 1,
                    height: "1.05em",
                    transform: "translateY(120%)",
                  }}
                >
                  {ch === " " ? " " : ch}
                </span>
              </span>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={skip}
          className="mono pointer-events-auto absolute top-8 right-8 text-[11px] uppercase tracking-widest text-muted hover:text-fg transition-colors"
        >
          Skip &nearr;
        </button>
      </div>
    </div>
  );
}
