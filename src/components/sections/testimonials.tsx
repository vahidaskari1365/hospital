"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/hospital-data";

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-l from-teal-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Quote className="size-4" />
            تجربه بیماران
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            رضایت <span className="text-gradient-medical">بیماران</span> ما
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            صدها هزار بیمار به ما اعتماد کرده‌اند و داستان سلامتی خود را با ما رقم زده‌اند.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="relative h-full p-6 border-0 bg-white shadow-medical hover:shadow-medical-lg transition-all">
                {/* Quote icon */}
                <div className="absolute -top-3 -right-3 size-12 rounded-full bg-gradient-to-br from-primary to-cyan-600 flex items-center justify-center shadow-lg">
                  <Quote className="size-5 text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="size-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-foreground/80 leading-relaxed mb-6 min-h-[100px]">
                  «{testimonial.text}»
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar className="size-12 ring-2 ring-primary/20">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-cyan-600 text-white font-bold">
                      {testimonial.image}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white shadow-medical"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">۴.۹/۵</div>
            <div className="text-xs text-muted-foreground mt-1">میانگین رضایت</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">۹۸٪</div>
            <div className="text-xs text-muted-foreground mt-1">توصیه به دیگران</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">+۱۲۰هزار</div>
            <div className="text-xs text-muted-foreground mt-1">بیمار درمان‌شده</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">+۸٬۵۰۰</div>
            <div className="text-xs text-muted-foreground mt-1">نظر مثبت</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
