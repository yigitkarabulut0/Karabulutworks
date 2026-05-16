"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Container } from "@/components/container";
import { bio } from "@/lib/bio";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-meta > *", {
        y: 18,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.08,
        delay: 0.2,
      });
      gsap.from(".hero-name span > span", {
        yPercent: 110,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.025,
        delay: 0.3,
      });
      gsap.from(".hero-cue", {
        opacity: 0,
        y: 12,
        duration: 0.8,
        ease: "expo.out",
        delay: 1.1,
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const letters = bio.name.split("");

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden border-b border-line pt-24 pb-10 md:pt-32"
    >
      <Container className="hero-meta flex items-start justify-between">
        <div>
          <p className="eyebrow">Yigit Karabulut</p>
          <p className="eyebrow mt-1">Portfolio &mdash; Twenty Twenty Six</p>
        </div>
        <div className="text-right">
          <p className="eyebrow">London / Istanbul</p>
          <p className="eyebrow mt-1">Available &middot; 2026</p>
        </div>
      </Container>

      <Container>
        <h1
          aria-label={bio.name}
          className="hero-name serif select-none text-[18vw] md:text-[15vw] lg:text-[13.5vw]"
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
                className="inline-block"
                style={{ lineHeight: 1, height: "1.05em" }}
              >
                {ch === " " ? " " : ch}
              </span>
            </span>
          ))}
        </h1>
      </Container>

      <Container className="hero-meta flex items-end justify-between gap-6">
        <div className="max-w-md">
          <p className="serif-italic text-2xl leading-tight md:text-3xl">
            {bio.roles.join(", ")}.
          </p>
        </div>
        <div className="hero-cue mono flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted">
          <span className="inline-block h-px w-10 bg-muted" /> Scroll
        </div>
      </Container>

      <BgGrid />
    </section>
  );
}

function BgGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
      style={{
        backgroundImage:
          "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
        backgroundSize: "8.333% 8.333%",
      }}
    />
  );
}
