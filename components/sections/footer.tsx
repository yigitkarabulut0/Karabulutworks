"use client";

import { Container } from "@/components/container";
import { Magnetic } from "@/components/magnetic";
import { ThemeToggle } from "@/components/theme-toggle";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-wrap items-center justify-between gap-6">
        <p className="mono text-[11px] uppercase tracking-widest text-muted">
          © 2026 — Yigit Karabulut
        </p>
        <p className="mono text-[11px] uppercase tracking-widest text-muted">
          London / Istanbul
        </p>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Magnetic strength={0.3}>
            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              data-cursor="top"
              className="mono inline-flex items-center gap-2 border border-line px-3 py-1.5 text-[11px] uppercase tracking-widest hover:bg-fg hover:text-bg transition-colors"
            >
              Back to top ↑
            </button>
          </Magnetic>
        </div>
      </Container>
    </footer>
  );
}
