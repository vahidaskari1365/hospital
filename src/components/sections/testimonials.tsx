"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, Quote, ArrowLeft } from "lucide-react";
import { TESTIMONIALS } from "@/lib/hospital-data";

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-medical relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="eyebrow mb-4 inline-block">تجربه بیماران</div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            رضایت
            <br />
            <span className="text-gradient-teal">صدای بیماران</span> ما
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            صدها هزار بیمار به ما اعتماد کرده‌اند و داستان سلامتی خود را با ما رقم زده‌اند.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 rounded-3xl bg-white shadow-elevated"
        >
          {[
            { value: "۴.۹/۵", label: "میانگین رضایت" },
            { value: "۹۸٪", label: "توصیه به دیگران" },
            { value: "+۱۲۰هزار", label: "بیمار درمان‌شده" },
            { value: "+۸٬۵۰۰", label: "نظر مثبت" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gradient-teal mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="relative h-full p-8 border-0 bg-white shadow-card hover:shadow-floating transition-all">
                {/* Quote icon */}
                <div className="absolute -top-4 -right-4 size-12 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center shadow-glow-teal">
                  <Quote className="size-6 text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="size-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground/80 leading-relaxed mb-6 text-pretty">
                  «{testimonial.text}»
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="size-12 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <div className="font-bold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <ArrowLeft className="size-4 text-muted-foreground" />
                </div>

                {/* Procedure tag */}
                <div className="mt-4">
                  <span className="inline-block text-xs text-primary bg-primary/5 px-2 py-1 rounded">
                    {testimonial.procedure}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
