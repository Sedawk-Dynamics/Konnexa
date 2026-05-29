"use client";

import { motion } from "framer-motion";
import { site, team } from "@/lib/site";
import { Reveal, StaggerGroup, staggerItem } from "../motion";
import { Icon } from "../icons";

export function Team() {
  return (
    <section id="team" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
            Leadership
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The people behind Konnexa
          </h2>
          <p className="mt-4 text-base text-muted">
            A hands-on team committed to delivering real outcomes for every client and learner.
          </p>
        </Reveal>

        <StaggerGroup className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-6">
          {team.map((member) => (
            <motion.article
              key={member.name}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group w-full max-w-sm overflow-hidden rounded-3xl border border-card-border bg-card p-7 text-center shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative mx-auto h-28 w-28">
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-brand to-brand-dark opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
                  {member.initials}
                </div>
                <motion.span
                  className="absolute inset-0 rounded-full ring-2 ring-brand/40"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm font-medium text-brand">{member.role}</p>
              <div className="mt-4 flex flex-col items-center gap-1.5 text-sm text-muted">
                {member.email && (
                  <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 hover:text-brand">
                    <Icon name="mail" className="h-4 w-4" />
                    {member.email}
                  </a>
                )}
                {member.phone && (
                  <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-brand">
                    <Icon name="phone" className="h-4 w-4" />
                    {member.phone}
                  </a>
                )}
              </div>
            </motion.article>
          ))}

          {/* Join the team card */}
          <motion.a
            href="#contact"
            variants={staggerItem}
            whileHover={{ y: -6 }}
            className="group flex w-full max-w-sm flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-card-border bg-background-alt p-7 text-center transition-colors hover:border-brand"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <Icon name="users" className="h-7 w-7" />
            </span>
            <h3 className="text-lg font-semibold text-foreground">Join our team</h3>
            <p className="text-sm text-muted">
              We&apos;re always looking for talented people. Reach out at{" "}
              <span className="font-medium text-brand">{site.email}</span>
            </p>
          </motion.a>
        </StaggerGroup>
      </div>
    </section>
  );
}
