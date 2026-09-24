"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, BadgeCheck, Leaf } from "lucide-react";
import { AWARDS } from "@/lib/hospital-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "ISO 9001:2015": BadgeCheck,
  "JCI Accreditation": ShieldCheck,
  "وزارت بهداشت": Award,
  "Green Hospital": Leaf,
};

export function Awards() {
  return (
    <section id="awards" className="py-24 lg:py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Right - text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="eyebrow mb-4">افتخارات و گواهینامه‌ها</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              کیفیت تایید‌شده در
              <br />
              <span className="text-gradient-teal">سطح بین‌المللی</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              بیمارستان شفای نوین با کسب گواهینامه‌های معتبر داخلی و بین‌المللی،
              تعهد خود به کیفیت خدمات درمانی و ایمنی بیماران را به اثبات رسانده است.
              این گواهینامه‌ها نشان‌دهنده تطابق فرآیندهای ما با بالاترین استانداردهای
              جهانی است.
            </p>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-muted/50">
                <div className="text-3xl font-bold text-gradient-teal mb-1">A+</div>
                <div className="text-xs text-muted-foreground">سطح کیفیت</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted/50">
                <div className="text-3xl font-bold text-gradient-teal mb-1">۹۸٪</div>
                <div className="text-xs text-muted-foreground">رضایت بیمار</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted/50">
                <div className="text-3xl font-bold text-gradient-teal mb-1">۲۰+</div>
                <div className="text-xs text-muted-foreground">گواهینامه</div>
              </div>
            </div>
          </motion.div>

          {/* Left - awards grid */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {AWARDS.map((award, idx) => {
                const Icon = iconMap[award.name] || Award;
                return (
                  <motion.div
                    key={award.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-white to-muted/30 border border-border hover:border-primary/30 hover:shadow-elevated transition-all"
                  >
                    {/* Decorative gradient */}
                    <div className="absolute -top-12 -left-12 size-32 rounded-full bg-gradient-to-br from-primary/5 to-transparent group-hover:scale-150 transition-transform duration-700" />

                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className="size-14 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center shadow-glow-teal">
                          <Icon className="size-7 text-white" />
                        </div>
                        <span className="text-xs font-bold text-muted-foreground tracking-[0.15em]">
                          {award.year}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-1">{award.name}</h3>
                      <p className="text-sm text-muted-foreground">{award.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
