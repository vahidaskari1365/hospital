"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, X } from "lucide-react";
import { AppointmentDialog } from "@/components/appointment-dialog";
import { HOSPITAL_INFO } from "@/lib/hospital-data";

export function StickyBookingBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-0 right-0 left-0 z-40 px-4 pb-4 animate-fade-up">
      <div className="container mx-auto">
        <div className="glass rounded-2xl shadow-floating border border-border/40 p-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative size-11 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center flex-shrink-0">
              <span className="absolute inset-0 rounded-xl animate-pulse-ring" />
              <Phone className="size-5 text-white" fill="white" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground">به کمک فوری نیاز دارید؟</div>
              <div className="text-sm font-bold truncate">اورژانس ۲۴ ساعته فعال</div>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a href={`tel:${HOSPITAL_INFO.emergencyPhone}`}>
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 border-rose-300 text-rose-600 hover:bg-rose-50"
              >
                <Phone className="size-4" />
                <span className="hidden sm:inline" dir="ltr">{HOSPITAL_INFO.emergencyPhone}</span>
                <span className="sm:hidden">تماس</span>
              </Button>
            </a>
            <AppointmentDialog>
              <Button
                size="sm"
                className="gap-1.5 bg-gradient-to-l from-teal-700 to-cyan-800 text-white"
              >
                <Calendar className="size-4" />
                <span className="hidden sm:inline">دریافت نوبت</span>
                <span className="sm:hidden">نوبت</span>
              </Button>
            </AppointmentDialog>
            <button
              onClick={() => setDismissed(true)}
              className="size-8 rounded-full hover:bg-muted flex items-center justify-center text-muted-foreground"
              aria-label="بستن"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
