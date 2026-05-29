"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Icon } from "../icons";

export function CTA() {
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-brand via-brand-violet to-brand-dark px-6 py-14 text-center sm:px-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
          <motion.div
            className="pointer-events-none absolute -left-10 -top-10 h-52 w-52 rounded-full bg-white/10 blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to grow with Konnexa?
            </h2>
            <p className="mt-4 text-base text-white/85">
              Whether you need to hire, market, or upskill — let&apos;s make your next move a
              success.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-dark shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Get a Free Consultation
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Icon name="phone" className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
