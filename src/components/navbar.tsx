"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Menu, Phone, Heart, Activity, ChevronLeft } from "lucide-react";
import { AppointmentDialog } from "@/components/appointment-dialog";
import { HOSPITAL_INFO } from "@/lib/hospital-data";

const NAV_LINKS = [
  { href: "#home", label: "خانه" },
  { href: "#about", label: "درباره ما" },
  { href: "#departments", label: "بخش‌ها" },
  { href: "#doctors", label: "پزشکان" },
  { href: "#facilities", label: "امکانات" },
  { href: "#packages", label: "پکیج‌ها" },
  { href: "#news", label: "اخبار" },
  { href: "#gallery", label: "گالری" },
  { href: "#faq", label: "سوالات" },
  { href: "#contact", label: "تماس" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar - contact info */}
      <div className="hidden md:block bg-gradient-to-l from-teal-700 to-cyan-800 text-white text-xs py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="size-3" />
              {HOSPITAL_INFO.phone}
            </span>
            <span className="flex items-center gap-1.5 text-rose-100 font-bold">
              <Heart className="size-3 fill-current" />
              اورژانس ۲۴ ساعته: {HOSPITAL_INFO.emergencyPhone}
            </span>
            <span className="text-cyan-100">{HOSPITAL_INFO.workingHours}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hover:text-rose-200 transition">
              پنل مدیریت
            </Link>
            <span className="text-cyan-300">|</span>
            <Link href="/login" className="hover:text-rose-200 transition">
              ورود بیماران
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-medical border-b border-border"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="relative size-12 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center shadow-medical group-hover:scale-105 transition-transform">
                <Heart className="size-6 text-white fill-white" />
                <Activity className="size-4 text-cyan-200 absolute -bottom-1 -left-1" />
                <span className="absolute -top-1 -right-1 size-3 rounded-full bg-rose-400 pulse-ring" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-foreground">
                  {HOSPITAL_INFO.shortName}
                </span>
                <span className="text-xs text-muted-foreground leading-tight">
                  بیمارستان تخصصی
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile menu */}
            <div className="flex items-center gap-2">
              <AppointmentDialog>
                <Button className="hidden sm:flex gap-2 bg-gradient-to-l from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white shadow-lg shadow-rose-500/20">
                  <Heart className="size-4 fill-current" />
                  دریافت نوبت
                </Button>
              </AppointmentDialog>

              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="size-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle className="text-right">منوی سایت</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-1 mt-6">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-all"
                      >
                        {link.label}
                        <ChevronLeft className="size-4 text-muted-foreground" />
                      </Link>
                    ))}
                    <div className="mt-4 px-4 py-3 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-2">اورژانس ۲۴ ساعته</p>
                      <p className="text-lg font-bold text-rose-600">{HOSPITAL_INFO.emergencyPhone}</p>
                    </div>
                    <AppointmentDialog>
                      <Button className="mt-4 w-full gap-2 bg-gradient-to-l from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white">
                        <Heart className="size-4 fill-current" />
                        دریافت نوبت آنلاین
                      </Button>
                    </AppointmentDialog>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
