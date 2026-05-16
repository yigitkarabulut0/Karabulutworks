"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { bio, splashRoles } from "@/lib/bio";

const SESSION_KEY = "yk-splash-seen";

function pickRoles(pool: string[], n: number): string[] {
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
  const quickRef = useRef<HTMLDivElement>(null);
  const quickMonoRef = useRef<HTMLDivElement>(null);
  const [skipped, setSkipped] = useState(false);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const playedRef = useRef(false);

  const sequence = useMemo(() => pickRoles(splashRoles, 3), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (playedRef.current) return;
    playedRef.current = true;

    const root = rootRef.current;
    if (!root) return;

    const seen = sessionStorage.getItem(SESSION_KEY);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const s = isMobile ? 0.78 : 1; // scale durations on mobile

    if (reduced) {
      root.style.display = "none";
      sessionStorage.setItem(SESSION_KEY, "1");
      return;
    }

    document.body.style.overflow = "hidden";

    const cleanupRoot = () => {
      document.body.style.overflow = "";
      sessionStorage.setItem(SESSION_KEY, "1");
      if (root) root.style.display = "none";
    };

    const ctx = gsap.context(() => {
      // ── PATH B: REFRESH WIPE (same session) ────────────────────────
      if (seen) {
        const quick = quickRef.current!;
        const mono = quickMonoRef.current!;

        // Quick panel covers everything; mono "YK" briefly shows.
        gsap.set(quick, { yPercent: 0 });
        gsap.set(mono, { y: 10, opacity: 0 });

        root.style.visibility = "visible";

        const tl = gsap.timeline({
          defaults: { ease: "expo.inOut" },
          onComplete: cleanupRoot,
        });
        tlRef.current = tl;

        tl.to(mono, {
          y: 0,
          opacity: 1,
          duration: 0.35 * s,
          ease: "expo.out",
        })
          .to(
            mono,
            {
              y: -10,
              opacity: 0,
              duration: 0.3 * s,
              ease: "expo.in",
            },
            `+=${0.18 * s}`
          )
          .to(
            quick,
            {
              yPercent: -100,
              duration: 0.85 * s,
              ease: "expo.inOut",
            },
            `-=${0.12 * s}`
          );

        return;
      }

      // ── PATH A: FULL CINEMATIC (fresh session) ────────────────────
      const stamp = stampRef.current!;
      const words = wordsRef.current!.querySelectorAll<HTMLDivElement>(".splash-word");
      const nameLetters = nameRef.current!.querySelectorAll<HTMLSpanElement>(".splash-name-letter");

      // Hide the quick panel off-screen so it doesn't cover the cinematic.
      gsap.set(quickRef.current, { yPercent: -100 });
      gsap.set(words, { yPercent: 110, opacity: 0 });
      gsap.set(nameLetters, { yPercent: 120 });
      gsap.set([topMaskRef.current, bottomMaskRef.current], { yPercent: 0 });
      gsap.set(stamp, { y: 12, opacity: 0 });

      root.style.visibility = "visible";

      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        onComplete: cleanupRoot,
      });
      tlRef.current = tl;

      // stamp
      tl.to(stamp, { y: 0, opacity: 1, duration: 0.35 * s, ease: "expo.out" })
        .to(stamp, { y: -10, opacity: 0, duration: 0.3 * s, ease: "expo.in" }, `+=${0.2 * s}`);

      // role words — explicit ENTER / HOLD / EXIT so each phrase
      // actually reaches full opacity and stays readable for a beat.
      const enterDur = 0.5 * s;
      const holdDur = 0.5 * s;
      const exitDur = 0.5 * s;

      words.forEach((w, i) => {
        const label = `w${i}`;
        tl.addLabel(label)
          .to(
            w,
            { yPercent: 0, opacity: 1, duration: enterDur, ease: "expo.out" },
            label
          )
          .to(
            w,
            { yPercent: -110, opacity: 0, duration: exitDur, ease: "expo.in" },
            `${label}+=${enterDur + holdDur}`
          );
        // After last word, leave a slightly longer tail before the name reveal.
        if (i === words.length - 1) tl.addLabel(`w${i}-end`, `+=${0.05 * s}`);
      });

      // name reveal — starts gently overlapping the last word's exit
      tl.to(
        nameLetters,
        {
          yPercent: 0,
          duration: 1.0 * s,
          stagger: 0.03 * s,
          ease: "expo.out",
        },
        `-=${0.35 * s}`
      );

      // mask split + name fade
      tl.to(
        topMaskRef.current,
        { yPercent: -100, duration: 1.05 * s, ease: "expo.inOut" },
        `+=${0.45 * s}`
      )
        .to(
          bottomMaskRef.current,
          { yPercent: 100, duration: 1.05 * s, ease: "expo.inOut" },
          "<"
        )
        .to(nameRef.current, { opacity: 0, duration: 0.55 * s }, `<+=${0.2 * s}`);
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
      style={{ visibility: "hidden" }}
      className="fixed inset-0 z-[200] pointer-events-none"
    >
      {/* Full-cinematic split masks (bottom layer) */}
      <div
        ref={topMaskRef}
        className="absolute inset-x-0 top-0 h-1/2 bg-bg pointer-events-auto"
      />
      <div
        ref={bottomMaskRef}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-bg pointer-events-auto"
      />

      {/* Cinematic content (mid layer) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
        <div
          ref={stampRef}
          className="mono absolute top-[max(2rem,env(safe-area-inset-top))] left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-fg md:text-[11px]"
          style={{ opacity: 0, transform: "translate(-50%, 12px)" }}
        >
          (YK — 2026)
        </div>

        <div
          ref={wordsRef}
          className="serif-italic relative w-full overflow-hidden text-center text-[14vw] text-fg sm:text-6xl md:text-7xl lg:text-8xl"
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
            className="text-[14vw] md:text-[10vw]"
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
          className="mono pointer-events-auto absolute top-[max(2rem,env(safe-area-inset-top))] right-6 text-[10px] uppercase tracking-widest text-muted hover:text-fg transition-colors md:right-8 md:text-[11px]"
        >
          Skip ↗
        </button>
      </div>

      {/* Quick-wipe curtain (top layer) — covers everything during refresh */}
      <div
        ref={quickRef}
        className="absolute inset-0 bg-bg pointer-events-auto"
        style={{ zIndex: 10 }}
      >
        <div
          ref={quickMonoRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span
            className="serif text-fg"
            style={{ fontSize: "clamp(80px, 14vw, 220px)", lineHeight: 1 }}
          >
            YK
          </span>
        </div>
      </div>
    </div>
  );
}
