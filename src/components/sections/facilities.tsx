"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Scan, Sparkles, ArrowRight } from "lucide-react";
import { FACILITIES } from "@/lib/hospital-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "monitor-heart": Sparkles,
  scissors: Sparkles,
  scan: Scan,
  "flask-conical": Scan,
  pill: Scan,
  baby: Scan,
};

export function Facilities() {
  return (
    <section id="facilities" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="eyebrow mb-4">امکانات و تجهیزات</div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            تجهیزات نسل جدید،
            <br />
            <span className="text-gradient-teal">در خدمت سلامت</span> شما
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            بیمارستان شفای نوین با سرمایه‌گذاری مستمر در فناوری‌های نوین پزشکی،
            تجهیزات پیشرفته‌ای را در اختیار کادر درمان قرار داده است تا بهترین تشخیص
            و درمان را به بیماران ارائه دهد.
          </p>
        </motion.div>

        {/* Asymmetric image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {FACILITIES.map((facility, idx) => {
            // Make first item larger
            const isFirst = idx === 0;
            const isLast = idx === FACILITIES.length - 1;
            return (
              <motion.div
                key={facility.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={isFirst ? "lg:col-span-2 lg:row-span-2" : ""}
              >
                <Card className="group relative h-full overflow-hidden border-0 bg-muted cursor-pointer">
                  {/* Image */}
                  <div className={`relative overflow-hidden ${isFirst ? "aspect-[16/10] lg:aspect-[16/12]" : "aspect-[16/10]"}`}>
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.02_240/0.95)] via-[oklch(0.15_0.02_240/0.3)] to-transparent" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 right-0 left-0 p-6">
                    {/* Stats badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs mb-3">
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                      {facility.stats}
                    </div>

                    <h3 className={`font-bold text-white mb-2 ${isFirst ? "text-2xl lg:text-3xl" : "text-xl"}`}>
                      {facility.name}
                    </h3>
                    <p className={`text-white/80 text-sm leading-relaxed line-clamp-2 ${isFirst ? "lg:line-clamp-none lg:max-w-2xl" : ""}`}>
                      {facility.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="flex items-center gap-2 mt-4 text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">اطلاعات بیشتر</span>
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Tech highlight banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1559757175-08fda86d0b1d?w=1600&q=80"
              alt="MRI"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[oklch(0.12_0.02_240/0.95)] via-[oklch(0.12_0.02_240/0.8)] to-[oklch(0.12_0.02_240/0.6)]" />
          </div>

          <div className="relative p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="eyebrow-light mb-4">نوآوری در پزشکی</div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  اولین دستگاه MRI ۳ تسلا
                  <br />
                  در منطقه
                </h3>
                <p className="text-white/80 leading-relaxed mb-8 text-pretty">
                  با رزولوشن فوق‌العاده بالا، امکان تشخیص دقیق‌تر بیماری‌ها در کوتاه‌ترین
                  زمان. این فناوری به متخصصین ما کمک می‌کند تا کوچکترین ضایعات را نیز
                  شناسایی کنند و درمان دقیق‌تری ارائه دهند.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["تشخیص سریع", "کیفیت تصویر بالا", "بدون اشعه", "ایمن برای کودکان"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right side - tech specs */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "قدرت مغناطیس", value: "۳ تسلا" },
                  { label: "زمان اسکن", value: "۲۰ دقیقه" },
                  { label: "رزولوشن", value: "۰.۵mm" },
                  { label: "دقت تشخیص", value: "۹۹.۸٪" },
                ].map((spec, i) => (
                  <div key={i} className="glass-dark rounded-2xl p-6">
                    <div className="text-3xl font-bold text-cyan-300 mb-1">{spec.value}</div>
                    <div className="text-sm text-white/70">{spec.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
