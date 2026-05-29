"use client";

import { MotionConfig } from "framer-motion";
import { useCallback, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// During SSR / hydration we default to light; the anti-FOUC inline script has
// already applied the real theme class, and useSyncExternalStore reconciles to
// the client snapshot right after hydration without a mismatch warning.
function getServerSnapshot(): Theme {
  return "light";
}

function setThemeClass(next: Theme) {
  document.documentElement.classList.toggle("dark", next === "dark");
  try {
    localStorage.setItem("theme", next);
  } catch {
    // ignore storage errors (e.g. private mode)
  }
  listeners.forEach((l) => l());
}

// Respects the user's OS "reduce motion" setting across all Framer Motion animations.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const setTheme = useCallback((next: Theme) => setThemeClass(next), []);
  const toggleTheme = useCallback(
    () => setThemeClass(theme === "dark" ? "light" : "dark"),
    [theme]
  );
  return { theme, setTheme, toggleTheme };
}
