"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/cn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  text: string;
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  trigger?: "scroll" | "mount";
  splitBy?: "word" | "char";
};

export function RevealText({
  text,
  as = "span",
  className,
  delay = 0,
  stagger = 0.06,
  duration = 1.1,
  trigger = "scroll",
  splitBy = "word",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = as as React.ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll(".reveal-line > span");
    if (!targets.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(targets, { y: 0 });
      return;
    }

    const tween = gsap.fromTo(
      targets,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration,
        delay,
        stagger,
        ease: "expo.out",
        paused: trigger === "scroll",
      }
    );

    if (trigger === "scroll") {
      const rect = el.getBoundingClientRect();
      const isAlreadyVisible =
        rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () => tween.play(),
      });

      if (isAlreadyVisible) {
        tween.play();
      }

      return () => {
        st.kill();
        tween.kill();
      };
    }
    return () => {
      tween.kill();
    };
  }, [text, delay, stagger, duration, trigger, splitBy]);

  const units =
    splitBy === "char"
      ? text.split("")
      : text.split(/(\s+)/).filter((s) => s.length);

  return (
    <Tag
      ref={ref}
      className={cn("inline", className)}
    >
      {units.map((u, i) => {
        if (/^\s+$/.test(u)) return <span key={i}>{u}</span>;
        return (
          <span key={i} className="reveal-line">
            <span>{u}</span>
          </span>
        );
      })}
    </Tag>
  );
}
