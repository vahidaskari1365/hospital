"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Clock, Package, ArrowLeft } from "lucide-react";
import { PACKAGES } from "@/lib/hospital-data";
import { AppointmentDialog } from "@/components/appointment-dialog";

export function Packages() {
  return (
    <section id="packages" className="py-20 lg:py-28 bg-gradient-medical relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-40" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Package className="size-4" />
            پکیج‌های درمانی و چکاپ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            چکاپ <span className="text-gradient-medical">سلامت</span> تخصصی
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            با پکیج‌های متنوع چکاپ سلامت، وضعیت بدن خود را به صورت کامل بررسی کنید و
            از بیماری‌های احتمالی پیشگیری کنید. همه پکیج‌ها شامل مشاوره تخصصی پزشک هستند.
          </p>
        </motion.div>

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
                className={`relative h-full overflow-hidden p-6 border-2 transition-all duration-300 hover:shadow-medical-lg ${
                  pkg.popular
                    ? "border-primary bg-white shadow-medical-lg"
                    : "border-border bg-white hover:border-primary/30"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-primary to-cyan-400" />
                )}

                {pkg.popular && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-l from-primary to-cyan-600 text-white gap-1 px-3">
                      <Star className="size-3 fill-current" />
                      محبوب‌ترین
                    </Badge>
                  </div>
                )}

                <div className="pt-2">
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground">تومان</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-5">
                    <Clock className="size-3.5" />
                    <span>مدت: {pkg.duration}</span>
                  </div>

                  <div className="space-y-2.5 mb-6 min-h-[200px]">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-sm">
                        <div className="size-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="size-3 text-emerald-600" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <AppointmentDialog>
                    <Button
                      className={`w-full gap-2 ${
                        pkg.popular
                          ? "bg-gradient-to-l from-primary to-cyan-600 text-white hover:from-primary/90 hover:to-cyan-700"
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            برای مشاوره تخصصی در انتخاب پکیج مناسب، با کارشناسان ما تماس بگیرید.
          </p>
          <Button variant="outline" asChild>
            <a href="tel:021-22345678" className="gap-2">
              <Package className="size-4" />
              مشاوره رایگان
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
