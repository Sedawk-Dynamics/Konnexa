"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { site, whyChooseUs } from "@/lib/site";
import { Reveal } from "../motion";
import { Icon, type IconName } from "../icons";

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        {/* Animated image panel */}
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(12% 12% 12% 12% round 2rem)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 2rem)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/3.4] overflow-hidden rounded-3xl border border-card-border"
        >
          <Image
            src="/images/about.jpg"
            alt="Konnexa Innovations team at work"
            fill
            sizes="(max-width: 1024px) 90vw, 560px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-br from-brand-navy/95 via-brand-dark/85 to-brand/70" />
          <div className="absolute inset-0 bg-grid opacity-25" />
          <motion.div
            className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-brand-light/40 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Foreground content */}
          <div className="relative flex h-full flex-col justify-between p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
                <Icon name="spark" className="h-6 w-6" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                {site.tagline}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "layers", label: "Integrated Services" },
                { icon: "users", label: "Talent Network" },
                { icon: "megaphone", label: "Growth Marketing" },
                { icon: "graduation", label: "Skilling & Placements" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
                  className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"
                >
                  <Icon name={item.icon as IconName} className="h-6 w-6 text-white" />
                  <p className="mt-2 text-sm font-medium text-white">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copy + USPs */}
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
              About Konnexa Innovations
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your single partner for people, growth &amp; skills
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Konnexa Innovations Private Limited helps businesses and students succeed in a
              digital-first world. We combine HR &amp; staffing, end-to-end digital marketing, and
              hands-on software training under one roof — so you get aligned strategy and
              dependable execution from a single, accountable team.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon name={item.icon as IconName} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
