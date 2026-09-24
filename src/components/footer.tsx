"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Send,
  ChevronLeft,
  ShieldCheck,
  Award,
  Heart,
  ArrowUp,
} from "lucide-react";
import { HOSPITAL_INFO } from "@/lib/hospital-data";

const FOOTER_LINKS = [
  {
    title: "بخش‌های تخصصی",
    links: [
      "قلب و عروق",
      "مغز و اعصاب",
      "ارتوپدی",
      "زنان و زایمان",
      "اطفال",
      "اورژانس",
    ],
  },
  {
    title: "خدمات بیماران",
    links: [
      "نوبت‌دهی آنلاین",
      "پنل کاریری بیماران",
      "پرونده پزشکی",
      "پکیج‌های چکاپ",
      "نتایج آزمایش",
      "تماس با پزشک",
    ],
  },
  {
    title: "درباره ما",
    links: [
      "معرفی بیمارستان",
      "کادر پزشکی",
      "اخبار و رویدادها",
      "فرصت‌های شغلی",
      "گالری تصاویر",
      "سوالات متداول",
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[oklch(0.12_0.02_240)] text-white relative overflow-hidden">
      {/* Decorative top gradient */}
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-l from-transparent via-teal-400/50 to-transparent" />

      {/* Newsletter section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-cyan-300 text-xs tracking-[0.2em] uppercase mb-3">
                خبرنامه شفای نوین
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-3 text-balance">
                از جدیدترین اخبار و خدمات
                <br />
                ما باخبر شوید
              </h3>
              <p className="text-white/60 leading-relaxed">
                با عضویت در خبرنامه، اولین نفری باشید که از کمپین‌ها و خدمات جدید ما مطلع می‌شوید.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-2"
            >
              <Input
                type="email"
                placeholder="ایمیل شما"
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-12 rounded-full px-6"
              />
              <Button className="bg-gradient-to-l from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 text-white gap-2 flex-shrink-0 h-12 px-6 rounded-full">
                <Send className="size-4" />
                عضویت
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="relative size-14 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center shadow-glow-teal group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" className="size-8 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-7-4.5-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-7 11-7 11z" />
                  <path d="M12 8v6m-3-3h6" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-xl">{HOSPITAL_INFO.shortName}</div>
                <div className="text-xs text-white/60 tracking-[0.2em] uppercase">Specialty Hospital</div>
              </div>
            </Link>

            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              بیمارستان تخصصی {HOSPITAL_INFO.shortName} با بیش از ۲۵ سال تجربه، کادر پزشکی
              مجرب و تجهیزات پیشرفته در خدمت سلامت جامعه ایران عزیز است. مرجع درمان تخصصی ایران.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
                <ShieldCheck className="size-3.5 text-emerald-400" />
                تأیید وزارت بهداشت
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
                <Award className="size-3.5 text-amber-400" />
                ISO 9001:2015
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
                <Heart className="size-3.5 text-rose-400 fill-current" />
                JCI Accredited
              </div>
            </div>
          </div>

          {/* Links columns */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h4 className="font-bold mb-5 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="group flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors"
                    >
                      <ChevronLeft className="size-3 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all text-cyan-400" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold mb-5 text-white">اطلاعات تماس</h4>
            <a href={`tel:${HOSPITAL_INFO.phone}`} className="block group">
              <div className="text-xs text-white/40 mb-1">تلفن</div>
              <div className="text-sm font-medium group-hover:text-cyan-300 transition" dir="ltr">{HOSPITAL_INFO.phone}</div>
            </a>
            <a href={`tel:${HOSPITAL_INFO.emergencyPhone}`} className="block group">
              <div className="text-xs text-rose-300/70 mb-1">اورژانس</div>
              <div className="text-sm font-bold text-rose-300 group-hover:text-rose-200 transition" dir="ltr">{HOSPITAL_INFO.emergencyPhone}</div>
            </a>
            <a href={`mailto:${HOSPITAL_INFO.email}`} className="block group">
              <div className="text-xs text-white/40 mb-1">ایمیل</div>
              <div className="text-sm font-medium group-hover:text-cyan-300 transition">{HOSPITAL_INFO.email}</div>
            </a>
          </div>
        </div>

        {/* Address bar */}
        <div className="mt-12 p-5 rounded-2xl bg-white/5 flex items-center gap-4 border border-white/10">
          <div className="size-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="size-5 text-cyan-300" />
          </div>
          <p className="text-sm text-white/70">{HOSPITAL_INFO.address}</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © ۱۴۰۳ بیمارستان تخصصی {HOSPITAL_INFO.shortName}. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Instagram, color: "hover:bg-pink-500" },
              { icon: Twitter, color: "hover:bg-sky-500" },
              { icon: Facebook, color: "hover:bg-blue-600" },
              { icon: Linkedin, color: "hover:bg-blue-700" },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href="#"
                  className={`size-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-transparent transition-all ${social.color}`}
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
          <a
            href="#home"
            className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
