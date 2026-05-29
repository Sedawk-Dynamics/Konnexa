"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Icon } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-card-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-24">
        <a
          href="#home"
          aria-label={site.brand}
          className="inline-flex items-center dark:rounded-xl dark:bg-white dark:px-2.5 dark:py-1.5"
        >
          <Logo className="h-14 lg:h-16" priority />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/30 sm:inline-flex"
          >
            Get a Quote
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-card text-foreground lg:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-card-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-background-alt hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-brand px-5 py-3 text-base font-semibold text-white"
                >
                  Get a Quote
                  <Icon name="arrowRight" className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5">
      <motion.span
        className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current"
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25 }}
      />
      <motion.span
        className="absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute left-0 top-3 h-0.5 w-5 rounded-full bg-current"
        animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25 }}
      />
    </span>
  );
}
