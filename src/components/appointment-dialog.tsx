"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, User, Phone, Mail, Stethoscope, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { DEPARTMENTS, DOCTORS, HOSPITAL_INFO } from "@/lib/hospital-data";

interface AppointmentDialogProps {
  children: React.ReactNode;
  defaultDoctor?: string;
}

export function AppointmentDialog({ children, defaultDoctor }: AppointmentDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email") || "",
      nationalId: formData.get("nationalId") || "",
      department: formData.get("department"),
      doctor: formData.get("doctor") || "",
      date: formData.get("date"),
      time: formData.get("time"),
      notes: formData.get("notes") || "",
    };

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("خطا در ثبت نوبت");
      setSuccess(true);
      toast.success("نوبت شما با موفقیت ثبت شد!", {
        description: "کد تأیید از طریق پیامک ارسال خواهد شد.",
      });
    } catch (err) {
      toast.error("متاسفانه خطایی رخ داد. لطفاً مجدداً تلاش کنید.");
    } finally {
      setLoading(false);
    }
  }

  const filteredDoctors = selectedDepartment
    ? DOCTORS.filter((d) => d.department === selectedDepartment)
    : DOCTORS;

  return (
    <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) setSuccess(false); }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {success ? (
          <div className="flex flex-col items-center gap-4 py-10 text-center">
            <div className="size-20 rounded-full bg-emerald-100 flex items-center justify-center">
              <CheckCircle2 className="size-12 text-emerald-600" />
            </div>
            <DialogTitle className="text-2xl">نوبت شما با موفقیت ثبت شد!</DialogTitle>
            <DialogDescription className="text-base">
              کد تأیید نوبت به زودی از طریق پیامک برای شما ارسال خواهد شد.
              <br />
              در صورت نیاز به تغییر یا لغو، از پنل کاربری خود اقدام کنید.
            </DialogDescription>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 w-full max-w-sm">
              <div className="text-xs text-teal-600 mb-1">شماره اورژانس</div>
              <div className="text-lg font-bold text-teal-800">{HOSPITAL_INFO.emergencyPhone}</div>
            </div>
            <Button onClick={() => { setOpen(false); setSuccess(false); }} className="mt-2">
              بستن
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-2xl">
                <Calendar className="size-6 text-primary" />
                دریافت نوبت آنلاین
              </DialogTitle>
              <DialogDescription>
                فرم زیر را تکمیل کنید. همکاران ما برای تأیید نوبت با شما تماس خواهند گرفت.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-1.5">
                  <User className="size-3.5" /> نام و نام خانوادگی
                </Label>
                <Input id="name" name="name" required placeholder="مثال: محمد محمدی" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-1.5">
                  <Phone className="size-3.5" /> شماره تلفن همراه
                </Label>
                <Input id="phone" name="phone" type="tel" required placeholder="09xxxxxxxxx" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-1.5">
                  <Mail className="size-3.5" /> ایمیل (اختیاری)
                </Label>
                <Input id="email" name="email" type="email" placeholder="email@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nationalId" className="flex items-center gap-1.5">
                  <User className="size-3.5" /> کد ملی
                </Label>
                <Input id="nationalId" name="nationalId" placeholder="کد ملی ۱۰ رقمی" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department" className="flex items-center gap-1.5">
                  <Stethoscope className="size-3.5" /> بخش مورد نظر
                </Label>
                <Select name="department" onValueChange={setSelectedDepartment}>
                  <SelectTrigger><SelectValue placeholder="انتخاب بخش" /></SelectTrigger>
                  <SelectContent>
                    {DEPARTMENTS.map((d) => (
                      <SelectItem key={d.slug} value={d.slug}>{d.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="doctor" className="flex items-center gap-1.5">
                  <User className="size-3.5" /> پزشک (اختیاری)
                </Label>
                <Select name="doctor" defaultValue={defaultDoctor}>
                  <SelectTrigger><SelectValue placeholder="انتخاب پزشک" /></SelectTrigger>
                  <SelectContent>
                    {filteredDoctors.map((d) => (
                      <SelectItem key={d.slug} value={d.slug}>{d.name} - {d.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-1.5">
                  <Calendar className="size-3.5" /> تاریخ مراجعه
                </Label>
                <Input id="date" name="date" type="date" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time" className="flex items-center gap-1.5">
                  <Calendar className="size-3.5" /> ساعت مراجعه
                </Label>
                <Select name="time">
                  <SelectTrigger><SelectValue placeholder="انتخاب ساعت" /></SelectTrigger>
                  <SelectContent>
                    {["۰۸:۰۰", "۰۹:۰۰", "۱۰:۰۰", "۱۱:۰۰", "۱۴:۰۰", "۱۵:۰۰", "۱۶:۰۰", "۱۷:۰۰", "۱۸:۰۰"].map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="notes">توضیحات (اختیاری)</Label>
                <Textarea id="notes" name="notes" rows={3} placeholder="در صورت وجود بیماری خاص یا شرح حال..." />
              </div>

              <DialogFooter className="sm:col-span-2 gap-2 mt-2">
                <DialogClose asChild>
                  <Button type="button" variant="outline">انصراف</Button>
                </DialogClose>
                <Button type="submit" disabled={loading} className="gap-2 bg-gradient-to-l from-teal-600 to-cyan-700 text-white">
                  {loading ? <Loader2 className="size-4 animate-spin" /> : <CheckCircle2 className="size-4" />}
                  ثبت نوبت
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
