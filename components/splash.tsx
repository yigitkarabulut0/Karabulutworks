"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { bio } from "@/lib/bio";

const SESSION_KEY = "yk-splash-seen";

export function Splash() {
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const leftRuleRef = useRef<HTMLSpanElement>(null);
  const rightRuleRef = useRef<HTMLSpanElement>(null);
  const [skipped, setSkipped] = useState(false);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = rootRef.current;
    const panel = panelRef.current;
    if (!root || !panel) return;

    const seen = sessionStorage.getItem(SESSION_KEY);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const speed = isMobile ? 0.95 : 1;

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
      const introItems = [
        markRef.current,
        titleRef.current,
        subtitleRef.current,
        nameRef.current,
      ].filter(Boolean);

      gsap.set(root, { autoAlpha: 1, yPercent: 0 });
      gsap.set(panel, { yPercent: 0 });
      gsap.set(frameRef.current, { opacity: 0, scale: 0.985 });
      gsap.set(introItems, { y: 24, opacity: 0 });
      gsap.set(progressRef.current, { scaleX: 0, transformOrigin: "left center" });
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
        tl.to(frameRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.45 * speed,
        })
          .to(
            [markRef.current, titleRef.current],
            {
              y: 0,
              opacity: 1,
              duration: 0.65 * speed,
              stagger: 0.08 * speed,
            },
            "-=0.2"
          )
          .to(
            progressRef.current,
            {
              scaleX: 1,
              duration: 0.95 * speed,
              ease: "power2.inOut",
            },
            "-=0.15"
          )
          .to(panel, {
            yPercent: -100,
            duration: 1.05 * speed,
            ease: "expo.inOut",
          });

        return;
      }

      tl.to(frameRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.75 * speed,
      })
        .to(
          [leftRuleRef.current, rightRuleRef.current],
          {
            scaleX: 1,
            duration: 0.8 * speed,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .to(
          markRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.7 * speed,
          },
          "-=0.45"
        )
        .to(
          titleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.95 * speed,
          },
          "-=0.3"
        )
        .to(
          subtitleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.75 * speed,
          },
          "-=0.35"
        )
        .to(
          nameRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.75 * speed,
          },
          "-=0.45"
        )
        .to(
          progressRef.current,
          {
            scaleX: 1,
            duration: 2.2 * speed,
            ease: "power1.inOut",
          },
          "+=0.3"
        )
        .to(
          introItems,
          {
            y: -18,
            opacity: 0,
            duration: 0.75 * speed,
            stagger: 0.04 * speed,
            ease: "power3.in",
          },
          "+=0.35"
        )
        .to(
          panel,
          {
            yPercent: -100,
            duration: 1.15 * speed,
            ease: "expo.inOut",
          },
          "-=0.25"
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
        <div
          ref={frameRef}
          className="relative flex min-h-[min(620px,78svh)] w-full max-w-[1180px] flex-col items-center justify-center border-y border-line/80 py-14 text-center md:min-h-[min(680px,76svh)]"
        >
          <span
            ref={leftRuleRef}
            className="absolute left-0 top-8 hidden h-px w-[22vw] max-w-80 bg-fg/40 md:block"
          />
          <span
            ref={rightRuleRef}
            className="absolute right-0 bottom-8 hidden h-px w-[22vw] max-w-80 bg-fg/40 md:block"
          />

          <div
            ref={markRef}
            className="mono mb-8 text-[10px] uppercase tracking-[0.34em] text-muted md:mb-10 md:text-[11px]"
          >
            YK / Portfolio / 2026
          </div>

          <h1
            ref={titleRef}
            className="serif-italic max-w-5xl text-balance text-[clamp(4.25rem,13vw,12.5rem)] leading-[0.82] text-fg"
            style={{ letterSpacing: 0 }}
          >
            Full-Stack Human
          </h1>

          <p
            ref={subtitleRef}
            className="mono mt-8 max-w-[34rem] text-balance text-[11px] uppercase leading-relaxed tracking-[0.16em] text-muted md:mt-10"
          >
            Product instinct, security depth and AI-native software craft.
          </p>

          <p
            ref={nameRef}
            className="serif mt-10 text-2xl leading-none text-fg md:text-4xl"
          >
            {bio.name}
          </p>

          <div className="mt-12 h-px w-full max-w-xs overflow-hidden bg-line md:mt-14 md:max-w-md">
            <span
              ref={progressRef}
              className="block h-full w-full bg-fg"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
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
