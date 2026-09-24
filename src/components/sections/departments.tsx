"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Check } from "lucide-react";
import {
  Heart,
  Brain,
  Bone,
  Baby,
  Stethoscope,
  Activity,
  Scissors,
  Siren,
  ArrowLeft,
} from "lucide-react";
import { DEPARTMENTS } from "@/lib/hospital-data";
import { AppointmentDialog } from "@/components/appointment-dialog";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "heart-pulse": Heart,
  brain: Brain,
  bone: Bone,
  baby: Baby,
  stethoscope: Stethoscope,
  activity: Activity,
  scissors: Scissors,
  siren: Siren,
};

export function Departments() {
  const [active, setActive] = useState<string | null>(null);
  const activeDept = DEPARTMENTS.find((d) => d.slug === active);

  return (
    <section id="departments" className="py-20 lg:py-28 bg-white relative">
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Stethoscope className="size-4" />
            بخش‌های درمانی
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            بخش‌های <span className="text-gradient-medical">تخصصی</span> بیمارستان
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            بیش از ۳۰ بخش تخصصی با تجهیزات روز دنیا و کادر پزشکی مجرب، آماده ارائه بهترین
            خدمات درمانی به شما و خانواده محترمتان هستند.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DEPARTMENTS.map((dept, idx) => {
            const Icon = iconMap[dept.icon] || Activity;
            return (
              <motion.div
                key={dept.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onMouseEnter={() => setActive(dept.slug)}
                onMouseLeave={() => setActive(null)}
              >
                <Card
                  className={`relative h-full overflow-hidden border-0 bg-gradient-to-br ${dept.color} hover:shadow-medical-lg transition-all duration-300 cursor-pointer group`}
                >
                  <div className="absolute inset-0 bg-white opacity-90 group-hover:opacity-100 transition" />
                  <div className="relative p-6">
                    <div className={`size-14 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-4`}>
                      <Icon className="size-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{dept.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {dept.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1.5 mb-4">
                      {dept.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Check className="size-3 text-emerald-600 flex-shrink-0" />
                          <span className="truncate">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className="text-xs text-muted-foreground">{dept.features.length} خدمت</span>
                      <AppointmentDialog defaultDoctor={dept.slug}>
                        <Button size="sm" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 gap-1.5 p-0 h-auto">
                          دریافت نوبت
                          <ArrowLeft className="size-3.5" />
                        </Button>
                      </AppointmentDialog>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
