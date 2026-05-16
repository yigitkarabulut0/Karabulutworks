"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

type Theme = "dark" | "light";
type Ctx = { theme: Theme; toggle: () => void; setTheme: (t: Theme) => void };

const ThemeContext = createContext<Ctx | null>(null);

const THEME_EVENT = "yk-theme-change";

function readTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("yk-theme") as Theme | null;
  if (stored === "dark" || stored === "light") return stored;
  const fromDataset = document.documentElement.dataset.theme as Theme | undefined;
  return fromDataset === "light" ? "light" : "dark";
}

function subscribeTheme(onStoreChange: () => void) {
  window.addEventListener(THEME_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(THEME_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore<Theme>(subscribeTheme, readTheme, () => "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const setTheme = (t: Theme) => {
    document.documentElement.dataset.theme = t;
    try {
      localStorage.setItem("yk-theme", t);
    } catch {}
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
