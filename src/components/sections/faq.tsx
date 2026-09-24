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
import { Card } from "@/components/ui/card";
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";
import { FAQS, HOSPITAL_INFO } from "@/lib/hospital-data";

const categories = Array.from(new Set(FAQS.map((f) => f.category)));

export function Faq() {
  const [category, setCategory] = useState<string>("all");
  const filtered = category === "all" ? FAQS : FAQS.filter((f) => f.category === category);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Right - sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
          >
            <div className="eyebrow mb-4">سوالات متداول</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              پاسخ به
              <br />
              <span className="text-gradient-teal">سوالات شما</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              پاسخ به رایج‌ترین سوالات بیماران و مراجعین محترم. اگر پاسخ خود را
              پیدا نکردید، با ما در تماس باشید.
            </p>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              <Button
                size="sm"
                variant={category === "all" ? "default" : "outline"}
                onClick={() => setCategory("all")}
                className="rounded-full"
              >
                همه
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

            {/* Contact card */}
            <Card className="p-6 bg-gradient-to-br from-teal-700 to-cyan-800 border-0 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <MessageCircle className="size-5 text-cyan-200" />
                </div>
                <h3 className="font-bold">سوال دیگری دارید؟</h3>
              </div>
              <p className="text-cyan-100 text-sm leading-relaxed mb-4">
                کارشناسان مرکز ارتباط با بیماران آماده پاسخگویی به سوالات شما هستند.
              </p>
              <div className="space-y-2">
                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition"
                  dir="ltr"
                >
                  <Phone className="size-4" />
                  {HOSPITAL_INFO.phone}
                </a>
                <a
                  href={`mailto:${HOSPITAL_INFO.email}`}
                  className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition"
                >
                  <Mail className="size-4" />
                  {HOSPITAL_INFO.email}
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Left - FAQ list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {filtered.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border border-border rounded-2xl px-6 bg-background hover:shadow-soft transition-shadow data-[state=open]:shadow-card data-[state=open]:bg-white"
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
        </div>
      </div>
    </section>
  );
}
