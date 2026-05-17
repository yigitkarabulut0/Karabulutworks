"use client";

import { useEffect } from "react";

type Theme = "dark" | "light";

function systemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applySystemTheme = () => {
      document.documentElement.dataset.theme = systemTheme();
      try {
        localStorage.removeItem("yk-theme");
      } catch {}
    };

    applySystemTheme();
    media.addEventListener("change", applySystemTheme);

    return () => {
      media.removeEventListener("change", applySystemTheme);
    };
  }, []);

  return <>{children}</>;
}
