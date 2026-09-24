"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Stethoscope,
  Scan,
  Heart,
  ArrowLeft,
} from "lucide-react";
import { PATIENT_JOURNEY } from "@/lib/hospital-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  stethoscope: Stethoscope,
  scan: Scan,
  heart: Heart,
};

export function PatientJourney() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-deep relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-grid-fine opacity-20" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="eyebrow-light mb-4 inline-block">مسیر بیمار</div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white text-balance">
            از نوبت‌دهی تا بهبود،
            <br />
            <span className="text-gradient-gold">در کنار شما</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed text-pretty">
            تجربه‌ای ساده، سریع و حرفه‌ای از اولین تماس تا ترخیص کامل، با شفقت و تخصص.
          </p>
        </motion.div>

        {/* Journey steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PATIENT_JOURNEY.map((step, idx) => {
            const Icon = iconMap[step.icon] || Heart;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative"
              >
                {/* Connector line (hidden on mobile) */}
                {idx < PATIENT_JOURNEY.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-0 right-0 -translate-x-1/2 translate-y-1/2">
                    <div className="h-px bg-gradient-to-l from-white/20 to-transparent" />
                  </div>
                )}

                <div className="relative glass-dark rounded-3xl p-8 h-full hover:bg-white/10 transition-colors">
                  {/* Step number */}
                  <div className="absolute top-6 left-6 text-6xl font-bold text-white/5">
                    {step.step.toLocaleString("fa-IR")}
                  </div>

                  {/* Icon */}
                  <div className="relative size-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-6 shadow-glow-teal">
                    <Icon className="size-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <div className="text-xs text-cyan-300 mb-2 tracking-[0.15em] uppercase">
                      مرحله {step.step.toLocaleString("fa-IR")}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Duration */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs">
                      <div className="size-1.5 rounded-full bg-emerald-400" />
                      {step.duration}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl glass-dark">
            <h3 className="text-2xl font-bold text-white">آماده شروع هستید؟</h3>
            <p className="text-white/70 max-w-md">
              همین حالا نوبت خود را رزرو کنید و اولین قدم را به سمت سلامت بردارید.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-l from-teal-600 to-cyan-700 text-white font-bold shadow-glow-teal hover:shadow-floating transition-all"
            >
              شروع مسیر سلامت
              <ArrowLeft className="size-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
