"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { site } from "@/lib/site";
import { Icon, type IconName } from "../icons";

const floatTransition = (delay = 0) => ({
  duration: 5,
  repeat: Infinity,
  repeatType: "reverse" as const,
  ease: "easeInOut" as const,
  delay,
});

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pt-44 lg:pb-28">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-96 w-96 rounded-full bg-brand/25 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-24 top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-light/20 blur-3xl animate-blob [animation-delay:-5s]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand"
          >
            <Icon name="spark" className="h-3.5 w-3.5" />
            {site.shortDescription}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Innovating Your{" "}
            <span className="text-gradient">Digital Success</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/30 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-brand/40"
            >
              Start Your Project
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted"
          >
            {["HR & Staffing", "Digital Marketing", "Training & Placements"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-brand" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Animated visual */}
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative mx-auto aspect-[4/4.4] w-full max-w-md"
    >
      {/* Glow behind the banner */}
      <motion.div
        className="absolute -inset-4 rounded-[2.75rem] bg-linear-to-br from-brand-light/30 via-brand/20 to-transparent blur-2xl"
        animate={{ scale: [1, 1.05, 1], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Banner image */}
      <motion.div
        initial={{ clipPath: "inset(10% 10% 10% 10% round 2rem)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0% round 2rem)" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-brand/25"
      >
        <Image
          src="/images/hero.jpg"
          alt="Konnexa Innovations team collaborating on digital projects"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 460px"
          className="object-cover"
        />
        {/* Brand tint + bottom gradient for legibility */}
        <div className="absolute inset-0 bg-linear-to-t from-brand-navy/85 via-brand-navy/10 to-transparent" />
        <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />

        <div className="absolute inset-x-0 bottom-0 p-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            <Icon name="spark" className="h-3.5 w-3.5" />
            Innovating Your Digital Success
          </span>
        </div>
      </motion.div>

      {/* Floating chips overlaid on the banner */}
      <FloatingChip
        icon="users"
        label="Talent Hired"
        value="500+"
        className="-left-4 top-8 sm:-left-6"
        delay={0.4}
      />
      <FloatingChip
        icon="megaphone"
        label="Campaigns"
        value="Live"
        className="-right-3 top-28 sm:-right-5"
        delay={1.2}
      />

      {/* Growth card */}
      <motion.div
        className="absolute -bottom-5 -right-2 flex items-center gap-3 rounded-2xl border border-brand/20 bg-card px-4 py-3 shadow-xl shadow-brand/15"
        animate={{ y: [0, -10, 0] }}
        transition={floatTransition(1.6)}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Icon name="rocket" className="h-[18px] w-[18px]" />
        </span>
        <div className="flex items-end gap-1.5">
          {[10, 16, 13, 22, 28].map((h, i) => (
            <motion.span
              key={i}
              className="w-1.5 rounded-full bg-linear-to-t from-brand-dark to-brand-light"
              style={{ height: h }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.1, ease: "backOut" }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function FloatingChip({
  icon,
  label,
  value,
  className = "",
  delay = 0,
}: {
  icon: IconName;
  label: string;
  value: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute flex items-center gap-2.5 rounded-2xl border border-brand/25 bg-card px-3.5 py-2.5 shadow-xl shadow-brand/10 backdrop-blur-sm ${className}`}
      animate={{ y: [0, -14, 0] }}
      transition={floatTransition(delay)}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
        <Icon name={icon} className="h-[18px] w-[18px]" />
      </span>
      <span className="leading-tight">
        <span className="block text-[0.7rem] text-muted">{label}</span>
        <span className="block text-sm font-bold text-foreground">{value}</span>
      </span>
    </motion.div>
  );
}
