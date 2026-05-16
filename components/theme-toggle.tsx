"use client";

import { useTheme } from "@/components/theme-provider";
import { Magnetic } from "@/components/magnetic";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <Magnetic as="span" strength={0.25}>
      <button
        type="button"
        onClick={toggle}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        data-cursor="toggle"
        className="mono inline-flex items-center gap-2 border border-line px-3 py-1.5 text-[11px] uppercase tracking-widest hover:bg-fg hover:text-bg transition-colors"
      >
        <span
          aria-hidden
          className="inline-block h-2 w-2 rounded-full"
          style={{ background: "currentColor" }}
        />
        {theme === "dark" ? "Dark" : "Light"}
      </button>
    </Magnetic>
  );
}
