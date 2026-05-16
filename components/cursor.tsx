"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    document.documentElement.classList.add("has-custom-cursor");

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const setDotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "none" });
    const setDotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "none" });
    const setRingX = gsap.quickTo(ring, "x", { duration: 0.4, ease: "expo.out" });
    const setRingY = gsap.quickTo(ring, "y", { duration: 0.4, ease: "expo.out" });

    let visible = false;

    const onMove = (e: PointerEvent) => {
      if (!visible) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
        visible = true;
      }
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);
    };

    const onLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
      visible = false;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const link = t.closest<HTMLElement>("a, button, [data-cursor]");
      if (link) {
        const lbl = link.getAttribute("data-cursor") ?? "";
        label.textContent = lbl;
        gsap.to(ring, {
          scale: lbl ? 2.4 : 1.8,
          duration: 0.4,
          ease: "expo.out",
        });
        gsap.to(label, { opacity: lbl ? 1 : 0, duration: 0.25 });
        gsap.to(dot, { scale: 0, duration: 0.2 });
      } else {
        gsap.to(ring, { scale: 1, duration: 0.4, ease: "expo.out" });
        gsap.to(label, { opacity: 0, duration: 0.15 });
        gsap.to(dot, { scale: 1, duration: 0.2 });
      }
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerover", onOver);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerover", onOver);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="yk-cursor pointer-events-none fixed top-0 left-0 z-[100] h-1.5 w-1.5 rounded-full bg-fg opacity-0"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="yk-cursor pointer-events-none fixed top-0 left-0 z-[100] flex h-10 w-10 items-center justify-center rounded-full border border-fg/80 opacity-0"
        aria-hidden
      >
        <span
          ref={labelRef}
          className="mono text-[9px] uppercase tracking-widest text-fg opacity-0"
        />
      </div>
    </>
  );
}
