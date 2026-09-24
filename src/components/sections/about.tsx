"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Heart,
  ShieldCheck,
  Award,
  Users,
  Clock,
  Lightbulb,
  HandHeart,
  Building2,
} from "lucide-react";
import { HOSPITAL_INFO } from "@/lib/hospital-data";

const VALUES = [
  {
    icon: Heart,
    title: "شفقت و مهربانی",
    description:
      "با هر بیمار مانند یکی از اعضای خانواده رفتار می‌کنیم. در شفای نوین، مراقبت انسانی اولویت دارد.",
    color: "from-rose-500/10 to-pink-500/5",
    iconColor: "text-rose-600",
  },
  {
    icon: ShieldCheck,
    title: "ایمنی بیمار",
    description:
      "تمام فرآیندهای درمانی ما مطابق با استانداردهای جهانی JCI و پروتکل‌های وزارت بهداشت است.",
    color: "from-emerald-500/10 to-teal-500/5",
    iconColor: "text-emerald-600",
  },
  {
    icon: Award,
    title: "کیفیت تخصصی",
    description:
      "با بهره‌گیری از مجرب‌ترین پزشکان و جدیدترین تجهیزات، بالاترین کیفیت درمان را ارائه می‌دهیم.",
    color: "from-amber-500/10 to-orange-500/5",
    iconColor: "text-amber-600",
  },
  {
    icon: Clock,
    title: "دسترسی ۲۴ ساعته",
    description:
      "اورژانس و خدمات فوری ما همیشه آماده‌اند. در هر ساعت از شبانه‌روز به ما اعتماد کنید.",
    color: "from-cyan-500/10 to-blue-500/5",
    iconColor: "text-cyan-600",
  },
];

const FEATURES = [
  { icon: Building2, label: "۳۵۰ تخت استاندارد" },
  { icon: Award, label: "۳۰ بخش تخصصی" },
  { icon: Users, label: "۸۰ پزشک متخصص" },
  { icon: Clock, label: "اورژانس ۲۴ ساعته" },
  { icon: ShieldCheck, label: "تأیید وزارت بهداشت" },
  { icon: Lightbulb, label: "تجهیزات روز دنیا" },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-medical" />
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <HandHeart className="size-4" />
            درباره بیمارستان
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-gradient-medical">{HOSPITAL_INFO.shortName}</span>
            <br />
            نامی قابل اعتماد در حوزه سلامت
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            از سال {HOSPITAL_INFO.established} تاکنون، بیمارستان تخصصی {HOSPITAL_INFO.shortName} با
            هدف ارائه خدمات درمانی در سطح استانداردهای جهانی فعالیت می‌کند. ما با تلفیق
            دانش پزشکی روز دنیا، تجهیزات پیشرفته و رویکرد انسانی به بیماران، توانسته‌ایم
            اعتماد بیش از ۱۲۰ هزار بیمار را جلب کنیم.
          </p>
        </motion.div>

        {/* Visual + Mission */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              {/* SVG illustrated medical scene */}
              <svg viewBox="0 0 600 450" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#67e8f9" />
                    <stop offset="100%" stopColor="#99f6e4" />
                  </linearGradient>
                  <linearGradient id="building" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0d9488" />
                    <stop offset="100%" stopColor="#0f766e" />
                  </linearGradient>
                </defs>
                <rect width="600" height="450" fill="url(#sky)" />
                {/* Sun */}
                <circle cx="500" cy="80" r="40" fill="#fbbf24" opacity="0.8" />
                {/* Clouds */}
                <ellipse cx="120" cy="70" rx="40" ry="15" fill="white" opacity="0.7" />
                <ellipse cx="200" cy="90" rx="50" ry="18" fill="white" opacity="0.6" />
                {/* Building */}
                <rect x="180" y="180" width="240" height="220" fill="url(#building)" rx="8" />
                <rect x="170" y="170" width="260" height="30" fill="#115e59" rx="4" />
                {/* Cross on top */}
                <rect x="285" y="130" width="30" height="50" fill="white" />
                <rect x="270" y="145" width="60" height="20" fill="white" />
                {/* Windows */}
                {[0, 1, 2].map((row) =>
                  [0, 1, 2, 3].map((col) => (
                    <rect
                      key={`${row}-${col}`}
                      x={200 + col * 55}
                      y={220 + row * 55}
                      width="35"
                      height="35"
                      fill="#fef3c7"
                      opacity="0.95"
                      rx="2"
                    />
                  ))
                )}
                {/* Door */}
                <rect x="280" y="350" width="40" height="50" fill="#115e59" rx="4" />
                {/* Trees */}
                <circle cx="100" cy="350" r="35" fill="#16a34a" />
                <rect x="93" y="370" width="14" height="30" fill="#78350f" />
                <circle cx="500" cy="350" r="35" fill="#16a34a" />
                <rect x="493" y="370" width="14" height="30" fill="#78350f" />
                {/* Ground */}
                <rect x="0" y="400" width="600" height="50" fill="#86efac" />
              </svg>
            </div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 shadow-xl max-w-[200px]"
            >
              <div className="text-3xl font-bold text-primary">۲۵+</div>
              <div className="text-sm text-muted-foreground">سال تجربه در خدمت به سلامت جامعه</div>
            </motion.div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">مأموریت و چشم‌انداز ما</h3>
            <p className="text-muted-foreground leading-relaxed">
              مأموریت ما در بیمارستان {HOSPITAL_INFO.shortName}، ارائه خدمات درمانی با کیفیت
              جهانی و در عین حال با رویکرد انسانی و قابل دسترس برای همه است. ما باور داریم که
              سلامت حق اساسی هر انسان است و تلاش می‌کنیم تا با نوآوری مستمر، آموزش پزشکان و
              پرستاران، و بهره‌گیری از فناوری‌های نوین، این حق را برای بیشترین تعداد بیماران
              محقق کنیم.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              چشم‌انداز ما، تبدیل شدن به مرجع درمانی پیشرو در منطقه خاورمیانه تا سال ۱۴۱۰ است؛
              جایی که بیماران از سراسر منطقه برای دریافت درمان تخصصی، ایمن و انسانی به ما اعتماد
              کنند و در نهایت، سلامت بهتری تجربه کنند.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-border shadow-sm hover:shadow-md transition"
                  >
                    <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">ارزش‌های بنیادین ما</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            اصولی که در تمام خدمات و رفتارهای ما نقش اساسی دارند
          </p>
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
                >
                  <Card className={`relative h-full overflow-hidden p-6 border-0 bg-gradient-to-br ${value.color} hover:scale-105 transition-transform duration-300`}>
                    <div className="size-14 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-4">
                      <Icon className={`size-7 ${value.iconColor}`} />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
