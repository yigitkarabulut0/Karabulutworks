"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inner = el.querySelector<HTMLElement>(".magnetic-inner") ?? el;

    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const setX = gsap.quickTo(inner, "x", { duration: 0.6, ease: "expo.out" });
    const setY = gsap.quickTo(inner, "y", { duration: 0.6, ease: "expo.out" });

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setX(x * strength);
      setY(y * strength);
    };
    const onLeave = () => {
      setX(0);
      setY(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return ref;
}
