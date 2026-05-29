"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-brand via-brand to-brand-violet px-6 py-14 sm:px-12">
          {/* Concentric decorative circles (Benet-style) */}
          <div className="pointer-events-none absolute -right-24 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-10 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
