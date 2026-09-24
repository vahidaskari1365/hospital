"use client";

import { motion } from "framer-motion";
import { PARTNERS, HOSPITAL_INFO } from "@/lib/hospital-data";
import { ShieldCheck } from "lucide-react";

export function TrustBar() {
  // Duplicate for seamless marquee
  const partners = [...PARTNERS, ...PARTNERS];

  return (
    <section id="partners" className="bg-white border-y border-border py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground tracking-[0.2em] uppercase">
            <ShieldCheck className="size-4 text-primary" />
            <span>پذیرش تمامی بیمه‌های پایه و تکمیلی</span>
          </div>
        </motion.div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-12 animate-marquee" style={{ width: "max-content" }}>
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 flex-shrink-0 px-6 py-3 rounded-xl border border-border/60 bg-background hover:border-primary/30 hover:shadow-soft transition-all"
              >
                <div className="size-10 rounded-lg bg-gradient-to-br from-teal-500/10 to-cyan-500/5 flex items-center justify-center">
                  <ShieldCheck className="size-5 text-primary/70" />
                </div>
                <span className="text-sm font-medium text-foreground/80 whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
