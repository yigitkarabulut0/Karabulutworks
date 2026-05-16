"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  title: string;
  accent: { from: string; to: string; fg?: string };
  icon?: string;
  initials?: string;
  status?: string;
  className?: string;
  /** "phone" frame mimics an iPhone screen; "card" is a wider, calmer aspect. */
  variant?: "phone" | "card";
};

/**
 * A calm, brand-honest stand-in for app marketing screenshots.
 *
 * Uses the real app icon (when available) plus the project's accent gradient
 * inside an iPhone-shaped frame. Designed to swap out cleanly once real
 * marketing screenshots exist — just drop them under /public/work/[slug]/...
 */
export function DevicePreview({
  title,
  accent,
  icon,
  initials,
  status,
  className,
  variant = "phone",
}: Props) {
  const isPhone = variant === "phone";
  const fg = accent.fg ?? "#ffffff";

  return (
    <div
      className={cn(
        "relative isolate flex items-center justify-center overflow-hidden",
        className
      )}
      aria-hidden
    >
      {/* soft floor + ambient glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 60%, color-mix(in oklab, var(--fg) 6%, transparent), transparent 70%)",
        }}
      />

      <div
        className={cn(
          "relative rounded-[3rem] p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] ring-1 ring-black/10",
          isPhone ? "aspect-[9/19.5] w-[clamp(220px,32vw,360px)]" : "aspect-[3/4] w-[clamp(280px,38vw,440px)]"
        )}
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--fg) 18%, transparent), color-mix(in oklab, var(--fg) 6%, transparent))",
        }}
      >
        {/* screen */}
        <div
          className="relative h-full w-full overflow-hidden rounded-[2.4rem]"
          style={{
            background: `linear-gradient(160deg, ${accent.from} 0%, ${accent.to} 100%)`,
            color: fg,
          }}
        >
          {/* notch */}
          {isPhone && (
            <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />
          )}

          {/* content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
            {icon ? (
              <Image
                src={icon}
                alt=""
                width={144}
                height={144}
                className="h-[28%] w-auto rounded-[28%] shadow-2xl ring-1 ring-white/20"
              />
            ) : (
              <div
                className="flex h-[26%] aspect-square items-center justify-center rounded-[28%] text-4xl font-light ring-1 ring-white/20"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05))",
                  fontFamily: "var(--font-serif-stack)",
                  color: fg,
                }}
              >
                {initials ?? title.slice(0, 2)}
              </div>
            )}

            <div className="space-y-2">
              <p
                className="text-2xl tracking-tight"
                style={{ fontFamily: "var(--font-serif-stack)" }}
              >
                {title}
              </p>
              {status && (
                <p
                  className="mono text-[10px] uppercase tracking-[0.18em]"
                  style={{ color: fg, opacity: 0.72 }}
                >
                  {status}
                </p>
              )}
            </div>

            {/* faint UI hint */}
            <div className="mt-4 flex w-full max-w-[80%] flex-col gap-2 opacity-50">
              <div className="h-1 rounded-full" style={{ background: fg }} />
              <div className="h-1 w-3/4 rounded-full" style={{ background: fg }} />
              <div className="h-1 w-1/2 rounded-full" style={{ background: fg }} />
            </div>
          </div>

          {/* highlight */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 60% at 50% -10%, rgba(255,255,255,0.22), transparent 60%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
