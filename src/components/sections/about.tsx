"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Heart,
  ShieldCheck,
  Award,
  Clock,
  Building2,
  Users,
  Lightbulb,
  HandHeart,
} from "lucide-react";
import { HOSPITAL_INFO } from "@/lib/hospital-data";

const VALUES = [
  {
    icon: Heart,
    title: "شفقت و مهربانی",
    description:
      "با هر بیمار مانند یکی از اعضای خانواده رفتار می‌کنیم. در شفای نوین، مراقبت انسانی اولویت اول است و کیفیت فنی با مهربانی همراه می‌شود.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: ShieldCheck,
    title: "ایمنی بیمار",
    description:
      "تمام فرآیندهای درمانی ما مطابق با استانداردهای جهانی JCI و پروتکل‌های وزارت بهداشت است. ایمنی شما تعهد ماست.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Award,
    title: "کیفیت تخصصی",
    description:
      "با بهره‌گیری از مجرب‌ترین پزشکان و جدیدترین تجهیزات روز دنیا، بالاترین کیفیت درمان را به بیماران ارائه می‌دهیم.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Clock,
    title: "دسترسی ۲۴ ساعته",
    description:
      "اورژانس و خدمات فوری ما همیشه آماده‌اند. در هر ساعت از شبانه‌روز، در سخت‌ترین لحظات، می‌توانید به ما اعتماد کنید.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
];

const TIMELINE = [
  {
    year: "۱۳۷۸",
    title: "تأسیس بیمارستان",
    description:
      "بیمارستان شفای نوین با ۱۰۰ تخت و ۵ بخش تخصصی در تهران آغاز به کار کرد.",
  },
  {
    year: "۱۳۸۵",
    title: "گسترش بخش قلب",
    description:
      "راه‌اندازی مرکز قلب با کات‌لب هیبریدی و واحد CCU مجزا.",
  },
  {
    year: "۱۳۹۲",
    title: "بخش نوزادان نارس",
    description:
      "تأسیس واحد NICU پیشرفته با ۱۸ اینکیوبیتور و تیم نئوناتولوژی.",
  },
  {
    year: "۱۳۹۸",
    title: "اعتبار بین‌المللی",
    description:
      "دریافت گواهینامه ISO 9001 و شروع همکاری با بیمه‌های تکمیلی بین‌المللی.",
  },
  {
    year: "۱۴۰۲",
    title: "نسل جدید تجهیزات",
    description:
      "نصب دستگاه MRI ۳ تسلا و CT Scan ۱۶۰ برشی، جدیدترین نسل تجهیزات پزشکی.",
  },
  {
    year: "۱۴۰۳",
    title: "مرجع درمانی منطقه",
    description:
      "تبدیل شدن به مرجع درمان تخصصی خاورمیانه با پذیرش بیماران بین‌المللی.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-editorial relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-noise" />
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <div className="eyebrow mb-4">درباره شفای نوین</div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            نامی قابل اعتماد
            <br />
            در <span className="text-gradient-teal">سلامت جامعه</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            از سال {HOSPITAL_INFO.established} تاکنون، بیمارستان تخصصی {HOSPITAL_INFO.shortName} با
            هدف ارائه خدمات درمانی در سطح استانداردهای جهانی فعالیت می‌کند. ما با تلفیق
            دانش پزشکی روز دنیا، تجهیزات پیشرفته و رویکرد انسانی به بیماران، توانسته‌ایم
            اعتماد بیش از ۱۲۰ هزار بیمار را جلب کنیم و به یکی از پیشروترین مراکز درمانی
            کشور تبدیل شویم.
          </p>
        </motion.div>

        {/* Editorial split: Image + Mission */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32 items-start">
          {/* Image with overlay stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-floating">
              <img
                src="https://images.unsplash.com/photo-1519494026890-80ed4e7c4b15?w=1200&q=80"
                alt="بیمارستان شفای نوین"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.02_240/0.8)] via-transparent to-transparent" />

              {/* Floating stat */}
              <div className="absolute bottom-6 right-6 left-6 glass-dark rounded-2xl p-6">
                <div className="flex items-center gap-6">
                  <div className="flex-1">
                    <div className="text-4xl font-bold text-white">۲۵+</div>
                    <div className="text-sm text-white/70">سال تجربه</div>
                  </div>
                  <div className="w-px h-12 bg-white/20" />
                  <div className="flex-1">
                    <div className="text-4xl font-bold text-white">۱۲۰هزار+</div>
                    <div className="text-sm text-white/70">بیمار درمان‌شده</div>
                  </div>
                  <div className="w-px h-12 bg-white/20" />
                  <div className="flex-1">
                    <div className="text-4xl font-bold text-white">۹۸٪</div>
                    <div className="text-sm text-white/70">رضایت بیماران</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 lg:pt-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">مأموریت ما</h3>
              <p className="text-muted-foreground leading-relaxed">
                مأموریت ما در بیمارستان {HOSPITAL_INFO.shortName}، ارائه خدمات درمانی با کیفیت
                جهانی و در عین حال با رویکرد انسانی و قابل دسترس برای همه است. ما باور داریم که
                سلامت حق اساسی هر انسان است و تلاش می‌کنیم تا با نوآوری مستمر، آموزش پزشکان و
                پرستاران، و بهره‌گیری از فناوری‌های نوین، این حق را برای بیشترین تعداد بیماران
                محقق کنیم.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">چشم‌انداز ما</h3>
              <p className="text-muted-foreground leading-relaxed">
                چشم‌انداز ما، تبدیل شدن به مرجع درمانی پیشرو در منطقه خاورمیانه تا سال ۱۴۱۰ است؛
                جایی که بیماران از سراسر منطقه برای دریافت درمان تخصصی، ایمن و انسانی به ما اعتماد
                کنند و در نهایت، سلامت بهتری تجربه کنند.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: Building2, label: "۳۵۰ تخت استاندارد" },
                { icon: Users, label: "۸۰ پزشک متخصص" },
                { icon: Award, label: "ISO 9001 تأیید شده" },
                { icon: Clock, label: "اورژانس ۲۴ ساعته" },
              ].map((fact, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border shadow-soft">
                  <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <fact.icon className="size-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{fact.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="eyebrow mb-4 inline-block">ارزش‌های بنیادین</div>
            <h3 className="text-3xl lg:text-4xl font-bold">
              اصولی که به آن‌ها پایبندیم
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <Card className="h-full p-8 border-border bg-white hover-lift hover:shadow-elevated transition-all">
                    <div className={`size-14 rounded-2xl ${value.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`size-7 ${value.color}`} />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16 text-center"
        >
          <div className="eyebrow mb-4 inline-block">مسیر ما</div>
          <h3 className="text-3xl lg:text-4xl font-bold">
            ۲۵ سال <span className="text-gradient-teal">خدمت</span> به سلامت
          </h3>
          <p className="text-muted-foreground mt-4">
            مسیری پر از دستاورد، نوآوری و تعهد به سلامت جامعه
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute right-8 lg:right-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />

          {TIMELINE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex gap-6 mb-12 ${
                idx % 2 === 0 ? "lg:flex-row-reverse lg:pl-12" : "lg:pr-12"
              }`}
            >
              {/* Dot */}
              <div className="absolute right-8 lg:right-1/2 top-2 -translate-y-0 translate-x-1/2 z-10">
                <div className="size-4 rounded-full bg-primary border-4 border-background shadow-glow-teal" />
              </div>

              {/* Content */}
              <div className={`flex-1 mr-16 lg:mr-0 ${idx % 2 === 0 ? "lg:text-left lg:pl-8" : "lg:pr-8"}`}>
                <div className="text-3xl font-bold text-gradient-teal mb-2">{item.year}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
