"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Heart,
  Scissors,
  Scan,
  FlaskConical,
  Pill,
  Baby,
  MonitorCheck,
  Sparkles,
} from "lucide-react";
import { FACILITIES } from "@/lib/hospital-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "monitor-heart": MonitorCheck,
  scissors: Scissors,
  scan: Scan,
  "flask-conical": FlaskConical,
  pill: Pill,
  baby: Baby,
};

export function Facilities() {
  return (
    <section id="facilities" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-grid opacity-30" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="size-4" />
            امکانات و تجهیزات
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            تجهیزات <span className="text-gradient-medical">پیشرفته</span> روز دنیا
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            بیمارستان {`شفای نوین`} با سرمایه‌گذاری مستمر در فناوری‌های نوین پزشکی،
            تجهیزات پیشرفته‌ای را در اختیار کادر درمان قرار داده است تا بهترین تشخیص
            و درمان را به بیماران ارائه دهد.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility, idx) => {
            const Icon = iconMap[facility.icon] || Heart;
            return (
              <motion.div
                key={facility.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Card className="group relative h-full overflow-hidden border border-border bg-white p-6 hover:shadow-medical-lg transition-all duration-300">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

                  <div className="relative">
                    {/* Icon with hover effect */}
                    <div className="relative mb-5">
                      <div className="size-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <Icon className="size-8 text-white" />
                      </div>
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-teal-500 opacity-0 group-hover:opacity-20 blur-xl transition" />
                    </div>

                    <h3 className="text-xl font-bold mb-3">{facility.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {facility.description}
                    </p>

                    {/* Bottom indicator */}
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">در دسترس ۲۴/۷</span>
                      <div className="flex gap-1">
                        <span className="size-1.5 rounded-full bg-emerald-400" />
                        <span className="size-1.5 rounded-full bg-emerald-400" />
                        <span className="size-1.5 rounded-full bg-emerald-400" />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Tech showcase banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-l from-teal-700 to-cyan-800 p-8 md:p-12 text-white"
        >
          <div className="absolute inset-0 bg-pattern-grid opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-300/30 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                دستگاه MRI ۳ تسلا نسل جدید
              </h3>
              <p className="text-cyan-100 leading-relaxed mb-6">
                اولین دستگاه MRI ۳ تسلا در منطقه با رزولوشن فوق‌العاده بالا، امکان
                تشخیص دقیق‌تر بیماری‌ها در کوتاه‌ترین زمان. این فناوری به متخصصین
                ما کمک می‌کند تا کوچکترین ضایعات را نیز شناسایی کنند و درمان
                دقیق‌تری ارائه دهند.
              </p>
              <div className="flex flex-wrap gap-4">
                {["تشخیص سریع", "کیفیت تصویر بالا", "بدون اشعه", "ایمن برای کودکان"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="size-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <Scan className="size-16 text-white" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-white/20 border-dashed animate-spin" style={{ animationDuration: "10s" }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
