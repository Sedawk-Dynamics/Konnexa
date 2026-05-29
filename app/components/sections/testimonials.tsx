"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/site";
import { Reveal, StaggerGroup, staggerItem } from "../motion";
import { Icon } from "../icons";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by businesses &amp; learners
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="flex h-full flex-col rounded-3xl border border-card-border bg-card p-7 shadow-sm transition-shadow hover:shadow-xl"
            >
              <Icon name="spark" className="h-7 w-7 text-brand/40" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-card-border pt-4">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted">{t.company}</p>
              </figcaption>
            </motion.figure>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
