"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Loader2,
  CheckCircle2,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { toast } from "sonner";
import { HOSPITAL_INFO } from "@/lib/hospital-data";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "تلفن تماس",
    value: HOSPITAL_INFO.phone,
    href: `tel:${HOSPITAL_INFO.phone}`,
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Phone,
    label: "اورژانس ۲۴ ساعته",
    value: HOSPITAL_INFO.emergencyPhone,
    href: `tel:${HOSPITAL_INFO.emergencyPhone}`,
    color: "from-rose-500 to-red-600",
  },
  {
    icon: Mail,
    label: "ایمیل",
    value: HOSPITAL_INFO.email,
    href: `mailto:${HOSPITAL_INFO.email}`,
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: MapPin,
    label: "آدرس",
    value: HOSPITAL_INFO.address,
    color: "from-amber-500 to-orange-600",
  },
];

export function Contact() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      content: formData.get("content"),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("خطا در ارسال پیام");
      toast.success("پیام شما با موفقیت ارسال شد!", {
        description: "به زودی با شما تماس خواهیم گرفت.",
      });
      (e.target as HTMLFormElement).reset();
    } catch {
      toast.error("خطا در ارسال. لطفاً مجدداً تلاش کنید.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MessageSquare className="size-4" />
            ارتباط با ما
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            با ما در <span className="text-gradient-medical">تماس</span> باشید
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            تیم ما آماده پاسخگویی به سوالات شماست. از طریق فرم زیر یا اطلاعات تماس با ما در ارتباط باشید.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {CONTACT_INFO.map((info, idx) => {
              const Icon = info.icon;
              const content = (
                <Card className="group flex items-start gap-4 p-5 border border-border bg-white hover:shadow-medical transition-all cursor-pointer">
                  <div className={`size-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition`}>
                    <Icon className="size-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-muted-foreground mb-1">{info.label}</div>
                    <div className="font-medium text-sm break-words">{info.value}</div>
                  </div>
                </Card>
              );
              return info.href ? (
                <a key={idx} href={info.href} className="block">{content}</a>
              ) : (
                <div key={idx}>{content}</div>
              );
            })}

            {/* Working hours */}
            <Card className="p-5 bg-gradient-to-l from-teal-50 to-cyan-50 border-teal-200">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="size-5 text-primary" />
                <h3 className="font-bold">ساعات کاری</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">اورژانس</span>
                  <span className="font-medium">۲۴ ساعت شبانه‌روز</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">پذیرش</span>
                  <span className="font-medium">۶ تا ۲۴</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">کلینیک‌ها</span>
                  <span className="font-medium">۸ تا ۲۰</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">داروخانه</span>
                  <span className="font-medium">۲۴ ساعت</span>
                </div>
              </div>
            </Card>

            {/* Social */}
            <div className="flex items-center justify-center gap-3 py-4">
              {[
                { icon: Instagram, href: "#", color: "hover:bg-pink-500" },
                { icon: Twitter, href: "#", color: "hover:bg-sky-500" },
                { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
                { icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className={`size-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground ${social.color} hover:text-white transition`}
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Form + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <Card className="p-6 border border-border bg-white shadow-medical">
              <h3 className="text-xl font-bold mb-4">فرم تماس</h3>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">نام و نام خانوادگی</Label>
                    <Input id="name" name="name" required placeholder="نام شما" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">شماره تماس</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="09xxxxxxxxx" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">ایمیل</Label>
                    <Input id="email" name="email" type="email" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">موضوع</Label>
                    <Select name="subject">
                      <SelectTrigger><SelectValue placeholder="انتخاب موضوع" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="appointment">نوبت‌دهی</SelectItem>
                        <SelectItem value="info">اطلاعات</SelectItem>
                        <SelectItem value="complaint">شکایت</SelectItem>
                        <SelectItem value="suggestion">پیشنهاد</SelectItem>
                        <SelectItem value="other">سایر</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">پیام شما</Label>
                  <Textarea
                    id="content"
                    name="content"
                    required
                    rows={5}
                    placeholder="پیام خود را اینجا بنویسید..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full gap-2 bg-gradient-to-l from-teal-600 to-cyan-700 text-white hover:from-teal-700 hover:to-cyan-800"
                >
                  {loading ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <Send className="size-4" />
                  )}
                  ارسال پیام
                </Button>
              </form>
            </Card>

            {/* Map */}
            <Card className="overflow-hidden border border-border shadow-medical">
              <div className="relative aspect-[16/8] bg-gradient-to-br from-teal-50 to-cyan-50">
                {/* Stylized map */}
                <div className="absolute inset-0 bg-pattern-grid opacity-30" />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, transparent 48%, oklch(0.7 0.05 200 / 0.15) 49%, oklch(0.7 0.05 200 / 0.15) 51%, transparent 52%),
                      linear-gradient(-45deg, transparent 48%, oklch(0.7 0.05 200 / 0.15) 49%, oklch(0.7 0.05 200 / 0.15) 51%, transparent 52%)
                    `,
                    backgroundSize: "30px 30px",
                  }}
                />

                {/* Roads */}
                <div className="absolute top-1/2 right-0 left-0 h-2 bg-white/60" />
                <div className="absolute right-1/3 top-0 bottom-0 w-2 bg-white/60" />

                {/* Hospital marker */}
                <div className="absolute top-1/2 right-1/3 -translate-y-1/2 translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 size-16 rounded-full bg-rose-500/30 animate-ping" />
                    <div className="relative size-16 rounded-full bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center shadow-lg">
                      <MapPin className="size-8 text-white fill-white" />
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg rounded-xl px-3 py-1.5 whitespace-nowrap">
                      <div className="text-xs font-bold">بیمارستان شفای نوین</div>
                    </div>
                  </div>
                </div>

                {/* Other markers */}
                <div className="absolute top-1/4 left-1/4 size-3 rounded-full bg-cyan-500 opacity-50" />
                <div className="absolute bottom-1/4 right-1/4 size-3 rounded-full bg-emerald-500 opacity-50" />

                {/* Compass */}
                <div className="absolute top-4 right-4 size-12 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-xs font-bold">
                  <span className="absolute top-1">N</span>
                  ↑
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
