"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Heart,
  Activity,
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
      "پنل کاربری بیماران",
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
    <footer className="bg-gradient-to-b from-teal-900 to-slate-900 text-white mt-auto">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                از جدیدترین اخبار و خدمات ما باخبر شوید
              </h3>
              <p className="text-teal-200">
                با عضویت در خبرنامه، اولین نفری باشید که از کمپین‌ها و خدمات جدید ما مطلع می‌شوید.
              </p>
            </div>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="ایمیل شما"
                className="bg-white/10 border-white/20 text-white placeholder:text-teal-200"
              />
              <Button className="bg-rose-500 hover:bg-rose-600 text-white gap-2 flex-shrink-0">
                <Send className="size-4" />
                عضویت
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#home" className="flex items-center gap-3">
              <div className="relative size-12 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <Heart className="size-6 text-white fill-white" />
                <Activity className="size-4 text-cyan-200 absolute -bottom-1 -left-1" />
              </div>
              <div>
                <div className="font-bold text-lg">{HOSPITAL_INFO.shortName}</div>
                <div className="text-xs text-teal-200">بیمارستان تخصصی</div>
              </div>
            </Link>
            <p className="text-sm text-teal-100 leading-relaxed max-w-sm">
              بیمارستان تخصصی {HOSPITAL_INFO.shortName} با بیش از ۲۵ سال تجربه، کادر پزشکی
              مجرب و تجهیزات پیشرفته در خدمت سلامت جامعه ایران عزیز است. مراقبت جامع،
              اعتماد همیشگی.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-xs">
                <ShieldCheck className="size-3.5 text-emerald-400" />
                تأیید وزارت بهداشت
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-xs">
                <Award className="size-3.5 text-amber-400" />
                ISO 9001
              </div>
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-4 text-teal-100">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="group flex items-center gap-1 text-sm text-teal-200 hover:text-white transition"
                    >
                      <ChevronLeft className="size-3 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Phone className="size-5 text-teal-300" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-teal-200">تلفن</div>
              <div className="text-sm font-medium" dir="ltr">{HOSPITAL_INFO.phone}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-rose-500/20 flex items-center justify-center flex-shrink-0">
              <Phone className="size-5 text-rose-400" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-teal-200">اورژانس</div>
              <div className="text-sm font-medium text-rose-300" dir="ltr">{HOSPITAL_INFO.emergencyPhone}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Mail className="size-5 text-teal-300" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-teal-200">ایمیل</div>
              <div className="text-sm font-medium truncate">{HOSPITAL_INFO.email}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Clock className="size-5 text-teal-300" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-teal-200">ساعات کاری</div>
              <div className="text-sm font-medium">۲۴ ساعت اورژانس</div>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="mt-6 p-4 rounded-2xl bg-white/5 flex items-center gap-3">
          <MapPin className="size-5 text-teal-300 flex-shrink-0" />
          <p className="text-sm text-teal-100">{HOSPITAL_INFO.address}</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-teal-300">
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
                  className={`size-9 rounded-full bg-white/10 flex items-center justify-center text-white ${social.color} transition`}
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
