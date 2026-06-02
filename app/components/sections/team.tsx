"use client";

import { motion } from "framer-motion";
import { site, team } from "@/lib/site";
import { Reveal, StaggerGroup, staggerItem } from "../motion";
import { Icon } from "../icons";

export function Team() {
  return (
    <section id="team" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-72 w-72 rounded-full bg-brand-violet/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Leadership
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The people behind Konnexa
          </h2>
          <p className="mt-4 text-base text-muted">
            A hands-on team committed to delivering real outcomes for every client and learner.
          </p>
        </Reveal>

        <StaggerGroup className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2">
          {team.map((member) => (
            <motion.article
              key={member.name}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-card-border bg-card p-7 shadow-sm transition-shadow hover:shadow-2xl"
            >
              {/* Decorative gradient corner */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-linear-to-br from-brand/15 to-brand-violet/15 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
              <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-linear-to-r from-transparent via-brand/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Header: avatar + name */}
              <div className="relative flex items-start gap-5">
                <div className="relative shrink-0">
                  <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-brand via-brand to-brand-violet shadow-lg shadow-brand/30">
                    <span className="text-2xl font-bold text-white">{member.initials}</span>
                    {/* Glossy highlight */}
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/25 to-transparent" />
                  </div>
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-1.5 rounded-[1.25rem] ring-2 ring-brand/35"
                    animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0, 0.55] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
                  />
                </div>
                <div className="min-w-0 flex-1 pt-1">
                  <h3 className="text-xl font-bold leading-tight text-foreground">
                    {member.name}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-brand">
                    <Icon name="badge" className="h-3 w-3" />
                    Leadership
                  </span>
                </div>
              </div>

              {/* Role / bio */}
              <p className="relative mt-5 text-sm leading-relaxed text-muted">{member.role}</p>

              {/* Contact actions */}
              <div className="relative mt-6 flex gap-2.5 border-t border-card-border pt-5">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    title={member.email}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-card-border bg-background-alt px-3 py-2.5 text-sm font-medium text-foreground transition-all hover:border-brand hover:bg-brand hover:text-white"
                  >
                    <Icon name="mail" className="h-4 w-4 shrink-0" />
                    <span>Email</span>
                  </a>
                )}
                {member.phone && (
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    title={member.phone}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-card-border bg-background-alt px-3 py-2.5 text-sm font-medium text-foreground transition-all hover:border-brand hover:bg-brand hover:text-white"
                  >
                    <Icon name="phone" className="h-4 w-4 shrink-0" />
                    <span>Call</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </StaggerGroup>

        {/* Hiring banner */}
        <Reveal delay={0.15} className="mx-auto mt-10 max-w-5xl">
          <a
            href={`mailto:${site.email}?subject=Joining%20Konnexa%20Innovations`}
            className="group relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-card-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl sm:flex-row sm:p-7"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-linear-to-b from-brand to-brand-violet" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand/10 blur-3xl transition-transform duration-500 group-hover:scale-125" />

            <div className="relative flex items-center gap-5 text-center sm:text-left">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-brand to-brand-violet text-white shadow-lg shadow-brand/30">
                <Icon name="users" className="h-7 w-7" />
              </span>
              <div>
                <p className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                  </span>
                  We&apos;re hiring
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground sm:text-xl">
                  Join our team and shape digital success
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Reach out at{" "}
                  <span className="font-medium text-brand">{site.email}</span>
                </p>
              </div>
            </div>

            <span className="relative inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-transform group-hover:translate-x-1">
              See open roles
              <Icon name="arrowRight" className="h-4 w-4" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
