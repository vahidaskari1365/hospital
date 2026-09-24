"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Activity } from "lucide-react";
import {
  Heart,
  Brain,
  Bone,
  Baby,
  Stethoscope,
  Scissors,
  Siren,
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
  const [active, setActive] = useState<string>(DEPARTMENTS[0].slug);
  const activeDept = DEPARTMENTS.find((d) => d.slug === active)!;

  return (
    <section id="departments" className="py-24 lg:py-32 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <div className="eyebrow mb-4">بخش‌های تخصصی</div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              ۳۰+ بخش تخصصی،
              <br />
              <span className="text-gradient-teal">یک هدف</span>: سلامت شما
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              هر بخش با تیمی از فلوشیپ‌های بین‌المللی و تجهیزات نسل جدید، آماده ارائه
              بهترین خدمات درمانی به شماست.
            </p>
          </div>
        </motion.div>

        {/* Layout: Departments list + Featured department */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* List - right side */}
          <div className="lg:col-span-5">
            <div className="space-y-2 max-h-[700px] overflow-y-auto scrollbar-thin pr-2">
              {DEPARTMENTS.map((dept, idx) => {
                const Icon = iconMap[dept.icon] || Activity;
                const isActive = active === dept.slug;
                return (
                  <motion.div
                    key={dept.slug}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setActive(dept.slug)}
                    className={`group relative cursor-pointer rounded-2xl p-5 transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-l from-teal-50 to-cyan-50 shadow-card border border-teal-200"
                        : "hover:bg-muted/50 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`size-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                        isActive
                          ? "bg-gradient-to-br from-teal-600 to-cyan-700 text-white shadow-glow-teal"
                          : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      }`}>
                        <Icon className="size-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`font-bold text-base ${isActive ? "text-primary" : "text-foreground"}`}>
                            {dept.name}
                          </h3>
                          {isActive && (
                            <Badge variant="default" className="bg-teal-600 text-white border-0">
                              فعال
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {dept.englishName} • {dept.stats.procedures} اقدام
                        </p>
                      </div>
                      <ArrowLeft className={`size-4 transition-all ${
                        isActive ? "text-primary translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                      }`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Featured department - left side */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeDept.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="sticky top-28"
            >
              <Card className="overflow-hidden border-0 shadow-elevated">
                {/* Image header */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={activeDept.image}
                    alt={activeDept.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.02_240/0.9)] via-[oklch(0.15_0.02_240/0.3)] to-transparent" />

                  {/* Department name on image */}
                  <div className="absolute bottom-0 right-0 left-0 p-6">
                    <div className="text-cyan-300 text-xs mb-2 tracking-[0.2em] uppercase">
                      {activeDept.englishName}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{activeDept.name}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-white/80">
                        {activeDept.stats.procedures} اقدام موفق
                      </span>
                      <span className="size-1 rounded-full bg-white/40" />
                      <span className="text-emerald-300">
                        رضایت {activeDept.stats.satisfaction}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                    {activeDept.description}
                  </p>

                  {/* Features grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {activeDept.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className="size-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <Check className="size-3 text-emerald-600" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3 pt-6 border-t border-border">
                    <AppointmentDialog defaultDoctor={activeDept.slug}>
                      <Button className="flex-1 bg-gradient-to-l from-teal-700 to-cyan-800 text-white gap-2">
                        دریافت نوبت
                        <ArrowLeft className="size-4" />
                      </Button>
                    </AppointmentDialog>
                    <Button variant="outline" className="border-border">
                      اطلاعات بیشتر
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
