"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Phone } from "lucide-react";
import { FAQS, HOSPITAL_INFO } from "@/lib/hospital-data";

const categories = Array.from(new Set(FAQS.map((f) => f.category)));

export function Faq() {
  const [category, setCategory] = useState<string>("all");

  const filtered = category === "all" ? FAQS : FAQS.filter((f) => f.category === category);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <HelpCircle className="size-4" />
            سوالات متداول
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            سوالات <span className="text-gradient-medical">متداول</span> شما
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            پاسخ به رایج‌ترین سوالات بیماران و مراجعین محترم
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              size="sm"
              variant={category === "all" ? "default" : "outline"}
              onClick={() => setCategory("all")}
              className="rounded-full"
            >
              همه سوالات
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={category === cat ? "default" : "outline"}
                onClick={() => setCategory(cat)}
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* FAQ items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {filtered.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border border-border rounded-2xl px-5 bg-gradient-medical hover:shadow-medical transition-shadow data-[state=open]:shadow-medical"
                >
                  <AccordionTrigger className="text-right hover:no-underline py-5">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="size-4 text-primary" />
                      </div>
                      <span className="font-medium text-base">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pr-11">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center p-8 rounded-3xl bg-gradient-to-l from-teal-700 to-cyan-800 text-white"
          >
            <MessageCircle className="size-10 mx-auto mb-4 text-cyan-200" />
            <h3 className="text-xl font-bold mb-2">سوال دیگری دارید؟</h3>
            <p className="text-cyan-100 mb-6">
              کارشناسان مرکز ارتباط با بیماران آماده پاسخگویی به سوالات شما هستند.
            </p>
            <Button asChild variant="secondary" className="gap-2">
              <a href={`tel:${HOSPITAL_INFO.phone}`}>
                <Phone className="size-4" />
                {HOSPITAL_INFO.phone}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
