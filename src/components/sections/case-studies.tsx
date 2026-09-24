"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowLeft, Activity } from "lucide-react";
import { CASE_STUDIES } from "@/lib/hospital-data";

export function CaseStudies() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-medical relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="eyebrow mb-4">مطالعات موردی</div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            داستان‌های
            <br />
            <span className="text-gradient-teal">نجات زندگی</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            تجربه‌هایی واقعی از بیمارانی که با تخصص تیم پزشکی شفای نوین، به زندگی بازگشتند.
          </p>
        </motion.div>

        {/* Case studies grid */}
        <div className="space-y-8">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="grid lg:grid-cols-12 gap-0 overflow-hidden border-0 bg-white shadow-card hover:shadow-elevated transition-all">
                {/* Image */}
                <div className={`relative lg:col-span-5 aspect-[4/3] lg:aspect-auto overflow-hidden ${idx % 2 === 0 ? "" : "lg:order-2"}`}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30">
                      {study.department}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 left-4">
                    <div className="text-xs text-white/80 mb-1">{study.date}</div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center ${idx % 2 === 0 ? "" : "lg:order-1"}`}>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                    {study.summary}
                  </p>

                  {/* Doctor and stats */}
                  <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="size-9 rounded-full bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center">
                        <User className="size-4 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">پزشک معالج</div>
                        <div className="text-sm font-bold">{study.doctor}</div>
                      </div>
                    </div>

                    <div className="w-px h-10 bg-border" />

                    <div className="flex items-center gap-2">
                      <Clock className="size-5 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">مدت جراحی</div>
                        <div className="text-sm font-bold">{study.duration}</div>
                      </div>
                    </div>

                    <div className="w-px h-10 bg-border" />

                    <div className="flex items-center gap-2">
                      <Activity className="size-5 text-emerald-600" />
                      <div>
                        <div className="text-xs text-muted-foreground">نتیجه</div>
                        <div className="text-sm font-bold text-emerald-600">{study.outcome}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
