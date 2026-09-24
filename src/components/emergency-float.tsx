"use client";

import { useEffect, useState } from "react";
import { Phone, X } from "lucide-react";
import { HOSPITAL_INFO } from "@/lib/hospital-data";

export function EmergencyFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
      className="fixed bottom-6 left-6 z-40 group flex items-center gap-3 bg-gradient-to-l from-rose-600 to-red-700 hover:from-rose-700 hover:to-red-800 text-white px-5 py-3 rounded-full shadow-2xl shadow-rose-500/30 transition-all hover:scale-105"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-rose-400 animate-ping opacity-75" />
        <Phone className="size-5 relative" fill="white" />
      </div>
      <div className="hidden sm:block">
        <div className="text-xs text-rose-100">اورژانس ۲۴ ساعته</div>
        <div className="text-sm font-bold" dir="ltr">{HOSPITAL_INFO.emergencyPhone}</div>
      </div>
    </a>
  );
}
