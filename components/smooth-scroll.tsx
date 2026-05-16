"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

let lenisInstance: Lenis | null = null;

function jumpToTop() {
  if (typeof window === "undefined") return;
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true, force: true });
  }
  // Always also reset native scroll — covers reduced-motion + safety.
  window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
}

export function SmoothScroll() {
  const pathname = usePathname();

  // Initialise Lenis once.
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    jumpToTop();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisInstance = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  // Reset scroll on every route change.
  useEffect(() => {
    jumpToTop();
    // Some browsers re-apply scroll after layout settles — guard with a frame.
    const id = requestAnimationFrame(jumpToTop);
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
