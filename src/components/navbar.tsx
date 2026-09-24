"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import {
  Menu,
  Phone,
  Heart,
  ChevronDown,
  Calendar,
  User,
  Stethoscope,
  Building2,
  Newspaper,
  Shield,
  PhoneCall,
} from "lucide-react";
import { AppointmentDialog } from "@/components/appointment-dialog";
import { HOSPITAL_INFO, DEPARTMENTS } from "@/lib/hospital-data";

const NAV_LINKS = [
  {
    label: "درباره ما",
    href: "#about",
    children: [
      { label: "معرفی بیمارستان", href: "#about" },
      { label: "مدیریت و چشم‌انداز", href: "#about" },
      { label: "افتخارات و گواهینامه‌ها", href: "#awards" },
      { label: "بیمه‌های همکار", href: "#partners" },
    ],
  },
  {
    label: "خدمات تخصصی",
    href: "#departments",
    children: DEPARTMENTS.slice(0, 6).map((d) => ({
      label: d.name,
      href: "#departments",
    })),
  },
  {
    label: "پزشکان",
    href: "#doctors",
  },
  {
    label: "امکانات",
    href: "#facilities",
  },
  {
    label: "پکیج‌های سلامت",
    href: "#packages",
  },
  {
    label: "اخبار و مقالات",
    href: "#news",
  },
  {
    label: "تماس با ما",
    href: "#contact",
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-[oklch(0.15_0.02_240)] text-white text-xs">
        <div className="container mx-auto px-4 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-cyan-100">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {HOSPITAL_INFO.workingHours} فعال
            </span>
            <span className="text-white/40">|</span>
            <span className="text-white/70">{HOSPITAL_INFO.addressShort}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="flex items-center gap-1.5 text-white/70 hover:text-white transition">
              <User className="size-3.5" />
              ورود بیماران
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/admin" className="text-white/70 hover:text-white transition">
              پنل مدیریت
            </Link>
            <span className="text-white/20">|</span>
            <a href={`tel:${HOSPITAL_INFO.phone}`} className="flex items-center gap-1.5 text-white/70 hover:text-white transition" dir="ltr">
              <Phone className="size-3.5" />
              {HOSPITAL_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Emergency ribbon */}
      <div className="bg-gradient-to-l from-rose-600 to-red-700 text-white text-xs py-1.5">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <span className="size-1.5 rounded-full bg-white animate-pulse" />
          <span className="font-medium">اورژانس ۲۴ ساعته:</span>
          <a href={`tel:${HOSPITAL_INFO.emergencyPhone}`} className="font-bold tracking-wider" dir="ltr">{HOSPITAL_INFO.emergencyPhone}</a>
          <span className="hidden sm:inline text-rose-100">— پزشک متخصص همیشه حاضر</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "glass shadow-soft border-b border-border/40"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="relative size-12 rounded-2xl bg-gradient-to-br from-teal-700 to-cyan-800 flex items-center justify-center shadow-glow-teal group-hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="size-7 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-7-4.5-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-7 11-7 11z" />
                  <path d="M12 8v6m-3-3h6" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg text-foreground">
                  {HOSPITAL_INFO.shortName}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">
                  Specialty Hospital
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden xl:flex items-center gap-1">
              {NAV_LINKS.map((link, idx) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/75 hover:text-primary transition-colors"
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown className={`size-3 transition-transform ${hoveredIdx === idx ? "rotate-180" : ""}`} />
                    )}
                  </Link>

                  {/* Mega menu */}
                  {link.children && hoveredIdx === idx && (
                    <div className="absolute top-full right-0 pt-3 z-50">
                      <div className="glass rounded-2xl shadow-floating border border-border/40 p-2 min-w-[220px] animate-scale-in origin-top">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2">
              <AppointmentDialog>
                <Button className="hidden sm:flex gap-2 bg-gradient-to-l from-teal-700 to-cyan-800 hover:from-teal-800 hover:to-cyan-900 text-white shadow-glow-teal hover:shadow-floating transition-all">
                  <Calendar className="size-4" />
                  <span>دریافت نوبت</span>
                </Button>
              </AppointmentDialog>

              {/* Mobile menu */}
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="xl:hidden">
                    <Menu className="size-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px] sm:w-[400px] p-0">
                  <SheetHeader className="p-6 border-b border-border">
                    <SheetTitle className="text-right text-xl">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-xl bg-gradient-to-br from-teal-700 to-cyan-800 flex items-center justify-center">
                          <Heart className="size-5 text-white fill-white" />
                        </div>
                        <div>
                          <div className="font-bold">{HOSPITAL_INFO.shortName}</div>
                          <div className="text-xs text-muted-foreground font-normal">بیمارستان تخصصی</div>
                        </div>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col p-4 max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin">
                    {NAV_LINKS.map((link) => (
                      <div key={link.label} className="mb-1">
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                        >
                          {link.label}
                        </Link>
                        {link.children && (
                          <div className="pr-4 border-r-2 border-border/40 mr-4 mt-1">
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-4 py-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 right-0 left-0 p-4 border-t border-border bg-background">
                    <div className="bg-gradient-to-l from-rose-50 to-red-50 border border-rose-200 rounded-xl p-3 mb-3">
                      <p className="text-xs text-rose-700 mb-1">اورژانس ۲۴ ساعته</p>
                      <p className="text-lg font-bold text-rose-700" dir="ltr">{HOSPITAL_INFO.emergencyPhone}</p>
                    </div>
                    <AppointmentDialog>
                      <Button className="w-full gap-2 bg-gradient-to-l from-teal-700 to-cyan-800 text-white">
                        <Calendar className="size-4" />
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
