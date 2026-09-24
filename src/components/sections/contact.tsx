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
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Loader2,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Navigation,
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

const WORKING_HOURS = [
  { day: "اورژانس", hours: "۲۴ ساعت شبانه‌روز" },
  { day: "پذیرش", hours: "۶ تا ۲۴" },
  { day: "کلینیک‌ها", hours: "۸ تا ۲۰" },
  { day: "داروخانه", hours: "۲۴ ساعت" },
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
    <section id="contact" className="py-24 lg:py-32 bg-gradient-medical relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="eyebrow mb-4 inline-block">ارتباط با ما</div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            با ما در
            <br />
            <span className="text-gradient-teal">تماس باشید</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            تیم ما آماده پاسخگویی به سوالات شماست. از طریق فرم زیر یا اطلاعات تماس با ما در ارتباط باشید.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Right - contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            {CONTACT_INFO.map((info, idx) => {
              const Icon = info.icon;
              const content = (
                <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-border hover:shadow-elevated hover:border-primary/30 transition-all cursor-pointer">
                  <div className={`size-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="size-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-muted-foreground mb-1">{info.label}</div>
                    <div className="font-medium text-sm break-words" dir={info.label === "آدرس" ? "rtl" : "ltr"}>{info.value}</div>
                  </div>
                </div>
              );
              return info.href ? (
                <a key={idx} href={info.href} className="block">{content}</a>
              ) : (
                <div key={idx}>{content}</div>
              );
            })}

            {/* Working hours card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-700 to-cyan-800 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Clock className="size-5 text-cyan-200" />
                </div>
                <h3 className="font-bold">ساعات کاری</h3>
              </div>
              <div className="space-y-3">
                {WORKING_HOURS.map((item) => (
                  <div key={item.day} className="flex justify-between items-center text-sm">
                    <span className="text-cyan-100">{item.day}</span>
                    <span className="font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

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
                    className={`size-11 rounded-full bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:border-transparent transition-all shadow-soft ${social.color}`}
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Left - form + map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Form */}
            <div className="p-8 rounded-2xl bg-white border border-border shadow-elevated">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center">
                  <MessageSquare className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">فرم تماس</h3>
                  <p className="text-sm text-muted-foreground">پیام خود را برای ما ارسال کنید</p>
                </div>
              </div>

              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">نام و نام خانوادگی</Label>
                    <Input id="name" name="name" required placeholder="نام شما" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">شماره تماس</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="09xxxxxxxxx" dir="ltr" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">ایمیل</Label>
                    <Input id="email" name="email" type="email" placeholder="email@example.com" dir="ltr" />
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
                  className="w-full gap-2 bg-gradient-to-l from-teal-700 to-cyan-800 text-white h-12 hover:shadow-glow-teal transition-all"
                >
                  {loading ? (
                    <Loader2 className="size-5 animate-spin" />
                  ) : (
                    <Send className="size-5" />
                  )}
                  ارسال پیام
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-border shadow-elevated">
              <div className="relative aspect-[16/9] bg-gradient-to-br from-teal-50 to-cyan-50">
                <div className="absolute inset-0 bg-pattern-grid opacity-30" />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, transparent 48%, oklch(0.7 0.05 200 / 0.12) 49%, oklch(0.7 0.05 200 / 0.12) 51%, transparent 52%),
                      linear-gradient(-45deg, transparent 48%, oklch(0.7 0.05 200 / 0.12) 49%, oklch(0.7 0.05 200 / 0.12) 51%, transparent 52%)
                    `,
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Roads */}
                <div className="absolute top-1/2 right-0 left-0 h-2 bg-white/60" />
                <div className="absolute right-1/3 top-0 bottom-0 w-2 bg-white/60" />

                {/* Hospital marker */}
                <div className="absolute top-1/2 right-1/3 -translate-y-1/2 translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 size-16 rounded-full bg-rose-500/30 animate-ping" />
                    <div className="relative size-16 rounded-full bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center shadow-glow-teal">
                      <MapPin className="size-8 text-white fill-white" />
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-floating rounded-xl px-4 py-2 whitespace-nowrap">
                      <div className="text-xs text-muted-foreground">بیمارستان</div>
                      <div className="text-sm font-bold text-primary">شفای نوین</div>
                    </div>
                  </div>
                </div>

                {/* Compass */}
                <div className="absolute top-4 right-4 size-12 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-xs font-bold shadow-soft">
                  <span className="absolute top-1">N</span>
                  ↑
                </div>

                {/* Address overlay */}
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3 flex items-center gap-3">
                  <Navigation className="size-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{HOSPITAL_INFO.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
