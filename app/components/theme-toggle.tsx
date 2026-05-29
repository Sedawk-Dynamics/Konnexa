"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./theme-provider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={`relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-card-border bg-card text-foreground transition-colors hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ y: -18, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 18, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute"
          >
            <SunIcon />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ y: -18, opacity: 0, rotate: 90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 18, opacity: 0, rotate: -90 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute"
          >
            <MoonIcon />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
