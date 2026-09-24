"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Star,
  Clock,
  Package,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { PACKAGES } from "@/lib/hospital-data";
import { AppointmentDialog } from "@/components/appointment-dialog";

export function Packages() {
  return (
    <section id="packages" className="py-24 lg:py-32 bg-gradient-medical relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-40" />
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="eyebrow mb-4 inline-block">پکیج‌های سلامت</div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            سرمایه‌گذاری برای
            <br />
            <span className="text-gradient-teal">سلامت آینده</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            با پکیج‌های متنوع چکاپ سلامت، وضعیت بدن خود را به صورت کامل بررسی کنید و
            از بیماری‌های احتمالی پیشگیری کنید. همه پکیج‌ها شامل مشاوره تخصصی پزشک هستند.
          </p>
        </motion.div>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={pkg.popular ? "lg:-mt-4 lg:mb-4" : ""}
            >
              <Card
                className={`relative h-full overflow-hidden p-8 transition-all duration-500 hover:shadow-floating ${
                  pkg.popular
                    ? "border-2 border-primary bg-white shadow-elevated"
                    : "border border-border bg-white hover:border-primary/30"
                }`}
              >
                {pkg.popular && (
                  <>
                    <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-primary to-cyan-400" />
                    <div className="absolute -top-3 right-1/2 translate-x-1/2">
                      <Badge className="bg-gradient-to-l from-primary to-cyan-600 text-white gap-1 px-4 py-1.5 shadow-glow-teal">
                        <Sparkles className="size-3 fill-current" />
                        محبوب‌ترین
                      </Badge>
                    </div>
                  </>
                )}

                <div className="pt-2">
                  {/* English name */}
                  <div className="text-xs tracking-[0.2em] uppercase text-primary mb-2">
                    {pkg.englishTitle}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>

                  {/* Price */}
                  <div className="pb-6 mb-6 border-b border-border">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-sm text-muted-foreground">تومان</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3.5" />
                      <span>مدت: {pkg.duration}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8 min-h-[240px]">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-sm">
                        <div className="size-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="size-3 text-emerald-600" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <AppointmentDialog>
                    <Button
                      className={`w-full gap-2 h-12 ${
                        pkg.popular
                          ? "bg-gradient-to-l from-teal-700 to-cyan-800 text-white hover:shadow-glow-teal"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      رزرو پکیج
                      <ArrowLeft className="size-4" />
                    </Button>
                  </AppointmentDialog>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <Card className="p-8 bg-white border-border shadow-card">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center flex-shrink-0">
                  <Package className="size-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">نمی‌دانید کدام پکیج مناسب شماست؟</h3>
                  <p className="text-sm text-muted-foreground">
                    کارشناسان ما رایگان به شما مشاوره می‌دهند.
                  </p>
                </div>
              </div>
              <Button asChild variant="outline" className="gap-2">
                <a href="tel:021-22345678">
                  مشاوره رایگان
                  <ArrowLeft className="size-4" />
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
