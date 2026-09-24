"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Phone,
  ChevronLeft,
  Stethoscope,
  Calendar,
  ShieldCheck,
  Award,
  Clock,
  Star,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import { AppointmentDialog } from "@/components/appointment-dialog";
import { HOSPITAL_INFO, STATS } from "@/lib/hospital-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  users: Stethoscope,
  heart: Heart,
  building: Award,
};

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-pattern-grid opacity-50" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container relative mx-auto px-4 pt-12 pb-20 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right side - Content (RTL: first) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-right space-y-6"
          >
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/80 text-teal-700 text-sm font-medium border border-teal-200">
              <ShieldCheck className="size-4" />
              <span>بیمارستان مورد تأیید وزارت بهداشت</span>
              <span className="w-1 h-1 rounded-full bg-teal-400" />
              <span>اعتبار ISO 9001</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                سلامت شما،
                <br />
                <span className="text-gradient-medical">تعهد تخصصی</span> ماست
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                بیمارستان تخصصی {HOSPITAL_INFO.shortName} با بیش از ۲۵ سال تجربه، کادر پزشکی
                مجرب و تجهیزات پیشرفته، در کنار شماست تا بهترین خدمات درمانی را در محیطی
                آرام و امن دریافت کنید.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <AppointmentDialog>
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-l from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 text-white shadow-xl shadow-teal-600/20"
                >
                  <Calendar className="size-5" />
                  نوبت‌دهی آنلاین
                </Button>
              </AppointmentDialog>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="gap-2 border-2 border-rose-300 text-rose-600 hover:bg-rose-50"
              >
                <a href={`tel:${HOSPITAL_INFO.emergencyPhone}`}>
                  <PhoneCall className="size-5" />
                  اورژانس: {HOSPITAL_INFO.emergencyPhone}
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-border">
              {STATS.map((stat, idx) => {
                const Icon = iconMap[stat.icon] || Award;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="text-center"
                  >
                    <Icon className="size-5 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Left side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main visual - circular composition */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 to-rose-400/30 rounded-full blur-3xl" />

              {/* Medical cross composition */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Rotating ring */}
                <div
                  className="absolute inset-4 rounded-full border-2 border-dashed border-teal-300/50"
                  style={{ animation: "spin 30s linear infinite" }}
                />

                {/* Center card */}
                <div className="relative z-10 w-64 h-64 rounded-3xl bg-white shadow-2xl flex flex-col items-center justify-center gap-4 border border-border">
                  <div className="size-20 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center shadow-lg shadow-rose-500/30">
                    <Heart className="size-10 text-white fill-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">۲۴/۷</div>
                    <div className="text-sm text-muted-foreground">پشتیبانی اورژانس</div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="size-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-8 right-0 glass-card rounded-2xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                      <Stethoscope className="size-5 text-cyan-700" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">+۸۰ پزشک متخصص</div>
                      <div className="text-xs text-muted-foreground">کادر مجرب</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-12 left-0 glass-card rounded-2xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <ShieldCheck className="size-5 text-emerald-700" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">ایمنی بیمار</div>
                      <div className="text-xs text-muted-foreground">استاندارد جهانی</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                  className="absolute top-1/2 -left-4 -translate-y-1/2 glass-card rounded-2xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-primary" />
                    <span className="text-xs font-bold">نوبت آنلاین</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path
            d="M0 100V60C240 20 480 0 720 0C960 0 1200 20 1440 60V100H0Z"
            fill="white"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
