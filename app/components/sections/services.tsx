"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/site";
import { Reveal, StaggerGroup, staggerItem } from "../motion";
import { Icon, type IconName } from "../icons";

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            What We Do
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Services built to grow your business
          </h2>
          <p className="mt-4 text-base text-muted">
            From people and payroll to marketing and skilling — everything you need to scale,
            under one roof. <span className="font-medium text-brand">Hover a card to flip it.</span>
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div key={service.title} variants={staggerItem} className="flip-card h-[23rem]">
              <div className="flip-inner">
                {/* Front */}
                <div className="flip-face flex flex-col rounded-3xl border border-card-border bg-card p-7 shadow-sm">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon name={service.icon as IconName} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Explore
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </span>
                </div>

                {/* Back */}
                <div className="flip-face flip-back flex flex-col justify-between overflow-hidden rounded-3xl bg-linear-to-br from-brand via-brand to-brand-violet p-7 text-white shadow-xl shadow-brand/30">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                  <div className="relative">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-2.5 text-sm text-white/95">
                          <Icon name="check" className="h-4 w-4 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="#contact"
                    className="relative mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand transition-transform hover:scale-[1.03]"
                  >
                    Get started
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
