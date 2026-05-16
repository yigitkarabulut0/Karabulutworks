"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/cn";

type Props = {
  items: string[];
  speed?: number;
  className?: string;
};

export function Marquee({ items, speed = 60, className }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const first = track.firstElementChild as HTMLElement | null;
    if (!first) return;

    const duration = first.offsetWidth / speed;
    const tween = gsap.to(track, {
      x: () => -first.offsetWidth,
      duration,
      ease: "none",
      repeat: -1,
    });

    let resizeRaf = 0;
    const onResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        tween.kill();
        gsap.set(track, { x: 0 });
        const d = first.offsetWidth / speed;
        gsap.to(track, {
          x: () => -first.offsetWidth,
          duration: d,
          ease: "none",
          repeat: -1,
        });
      });
    };

    window.addEventListener("resize", onResize);
    return () => {
      tween.kill();
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(resizeRaf);
    };
  }, [items, speed]);

  return (
    <div className={cn("relative overflow-hidden", className)} aria-hidden>
      <div ref={trackRef} className="flex w-max whitespace-nowrap will-change-transform">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <span
                key={`${row}-${i}`}
                className="serif-italic flex items-center pr-12 text-7xl md:text-[9rem] lg:text-[12rem] leading-none"
              >
                {item}
                <span className="mx-12 inline-block h-3 w-3 rounded-full bg-fg align-middle" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
