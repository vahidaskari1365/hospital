"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  PhoneCall,
  Calendar,
  ShieldCheck,
  Star,
  ArrowLeft,
  Activity,
  Award,
  Play,
} from "lucide-react";
import Link from "next/link";
import { AppointmentDialog } from "@/components/appointment-dialog";
import { HOSPITAL_INFO, STATS, HERO_IMAGES } from "@/lib/hospital-data";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString("fa-IR")}
      {suffix}
    </span>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-[100vh] overflow-hidden bg-[oklch(0.12_0.02_240)]">
      {/* Background image with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src={HERO_IMAGES.building}
          alt="بیمارستان شفای نوین"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-[oklch(0.12_0.02_240/0.95)] via-[oklch(0.12_0.02_240/0.7)] to-[oklch(0.12_0.02_240/0.4)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.02_240)] via-transparent to-transparent" />
      </motion.div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-pattern-grid-fine opacity-30 z-10" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 container mx-auto px-4 pt-20 lg:pt-28 pb-12"
      >
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Right - Text content (RTL) */}
          <div className="lg:col-span-7 text-right space-y-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
              <span className="eyebrow-light">{HOSPITAL_INFO.englishName}</span>
              <span className="size-1.5 rounded-full bg-cyan-400" />
              <span className="eyebrow-light">Since {HOSPITAL_INFO.establishedGregorian}</span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] text-white text-balance">
                مرجع درمان
                <br />
                <span className="text-gradient-gold">تخصصی</span> ایران
              </h1>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl text-pretty">
                بیمارستان تخصصی {HOSPITAL_INFO.shortName} با ۲۵ سال تجربه، ۸۰ پزشک
                متخصص برجسته و تجهیزات نسل جدید، کیفیت جهانی را با شفقت ایرانی
                ترکیب می‌کند. در سخت‌ترین لحظات زندگی، در کنار شما هستیم.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <AppointmentDialog>
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-l from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 text-white shadow-floating hover:shadow-glow-teal transition-all duration-300 px-8 h-14 text-base"
                >
                  <Calendar className="size-5" />
                  نوبت‌دهی آنلاین
                </Button>
              </AppointmentDialog>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="gap-2 border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 bg-white/5 backdrop-blur-md px-8 h-14 text-base"
              >
                <a href={`tel:${HOSPITAL_INFO.emergencyPhone}`}>
                  <PhoneCall className="size-5" />
                  اورژانس: {HOSPITAL_INFO.emergencyPhone}
                </a>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-8 border-t border-white/10"
            >
              {[
                { icon: ShieldCheck, label: "تأیید وزارت بهداشت" },
                { icon: Award, label: "ISO 9001:2015" },
                { icon: Star, label: "رضایت ۹۸٪ بیماران" },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                  <badge.icon className="size-4 text-cyan-300" />
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Left - Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="glass-dark rounded-3xl p-8 shadow-floating">
              {/* Top: featured doctor preview */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="relative">
                  <img
                    src={HERO_IMAGES.doctor}
                    alt="پزشک متخصص"
                    className="size-16 rounded-2xl object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 size-5 rounded-full bg-emerald-500 border-2 border-white/20 flex items-center justify-center">
                    <span className="size-1.5 rounded-full bg-white animate-pulse" />
                  </div>
                </div>
                <div>
                  <div className="text-xs text-cyan-300 mb-1">پذیرش فعال</div>
                  <div className="text-white font-bold">۸۰+ پزشک متخصص</div>
                  <div className="text-xs text-white/60">آماده ویزیت</div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-px bg-white/10 mt-6 rounded-2xl overflow-hidden">
                {STATS.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 p-5 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-white/70 mb-0.5">{stat.label}</div>
                    <div className="text-xs text-cyan-300/70">{stat.sublabel}</div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <Link
                href="#doctors"
                className="mt-6 flex items-center justify-between p-4 rounded-xl bg-gradient-to-l from-teal-600/20 to-transparent border border-teal-500/30 hover:border-teal-400/50 transition-colors group"
              >
                <div>
                  <div className="text-sm text-white/70 mb-1">آشنا شوید</div>
                  <div className="text-white font-bold">تیم پزشکی ما</div>
                </div>
                <div className="size-10 rounded-full bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                  <ArrowLeft className="size-5 text-cyan-300" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/40 tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
