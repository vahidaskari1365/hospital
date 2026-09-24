"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Star,
  Clock,
  Calendar,
  User,
  Search,
  GraduationCap,
  Award,
  Languages,
  ChevronLeft,
} from "lucide-react";
import { DOCTORS, DEPARTMENTS } from "@/lib/hospital-data";
import { AppointmentDialog } from "@/components/appointment-dialog";

export function Doctors() {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filtered = DOCTORS.filter((d) => {
    const matchFilter = filter === "all" || d.department === filter;
    const matchSearch =
      !search ||
      d.name.includes(search) ||
      d.title.includes(search) ||
      d.specialty.includes(search);
    return matchFilter && matchSearch;
  });

  const departmentName = (slug: string) =>
    DEPARTMENTS.find((d) => d.slug === slug)?.name || slug;

  return (
    <section id="doctors" className="py-24 lg:py-32 bg-gradient-medical relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl opacity-50" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="eyebrow mb-4">کادر پزشکی</div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            با <span className="text-gradient-teal">بهترین‌ها</span>
            <br />
            در مسیر سلامت قدم بردارید
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            تیمی از فلوشیپ‌های بین‌المللی، اساتید دانشگاه و پزشکان پیشرو در حوزه‌های
            تخصصی، با تجربه‌ای بالغ بر ده‌ها سال و هزاران بیمار درمان‌شده.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              size="sm"
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              همه پزشکان ({DOCTORS.length})
            </Button>
            {DEPARTMENTS.slice(0, 6).map((d) => {
              const count = DOCTORS.filter((doc) => doc.department === d.slug).length;
              return (
                <Button
                  key={d.slug}
                  size="sm"
                  variant={filter === d.slug ? "default" : "outline"}
                  onClick={() => setFilter(d.slug)}
                  className="rounded-full"
                >
                  {d.name} ({count})
                </Button>
              );
            })}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="جستجوی پزشک، تخصص..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pr-12 pl-4 py-3 rounded-full border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-shadow shadow-soft"
            />
          </div>
        </div>

        {/* Doctors grid - editorial layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((doctor, idx) => (
            <motion.div
              key={doctor.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Dialog>
                <Card className="group relative h-full overflow-hidden border-0 bg-white shadow-card hover:shadow-floating transition-all duration-500 cursor-pointer">
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Status badge */}
                    <div className="absolute top-3 right-3">
                      {doctor.available ? (
                        <Badge className="bg-emerald-500/90 text-white border-0 backdrop-blur-md">
                          <span className="size-1.5 rounded-full bg-white mr-1.5 animate-pulse" />
                          پذیرش
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-amber-500/90 text-white border-0 backdrop-blur-md">
                          تکمیل ظرفیت
                        </Badge>
                      )}
                    </div>

                    {/* Rating badge */}
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs">
                        <Star className="size-3 text-amber-400 fill-amber-400" />
                        <span className="font-bold">{doctor.rating}</span>
                      </div>
                    </div>

                    {/* Name overlay */}
                    <div className="absolute bottom-0 right-0 left-0 p-4">
                      <h3 className="text-white font-bold text-lg">{doctor.name}</h3>
                      <p className="text-cyan-200 text-xs">{doctor.title}</p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{doctor.specialty}</p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="size-3.5" />
                        <span>{doctor.experience} سال</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="size-3.5" />
                        <span>{doctor.reviews} نظر</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex-1 text-xs">
                          پروفایل
                        </Button>
                      </DialogTrigger>
                      <AppointmentDialog defaultDoctor={doctor.slug}>
                        <Button size="sm" className="flex-1 bg-gradient-to-l from-teal-700 to-cyan-800 text-white text-xs">
                          نوبت
                        </Button>
                      </AppointmentDialog>
                    </div>
                  </div>
                </Card>

                {/* Doctor detail dialog */}
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                    <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 right-0 left-0 p-8">
                      <div className="flex items-center gap-2 mb-2">
                        {doctor.available && (
                          <Badge className="bg-emerald-500 text-white border-0">
                            <span className="size-1.5 rounded-full bg-white mr-1.5 animate-pulse" />
                            در حال پذیرش
                          </Badge>
                        )}
                        <Badge variant="secondary" className="bg-white/20 backdrop-blur-md text-white border-0">
                          {departmentName(doctor.department)}
                        </Badge>
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-1">{doctor.name}</h2>
                      <p className="text-cyan-200">{doctor.title} • {doctor.specialty}</p>
                    </div>
                  </div>

                  <div className="p-8 space-y-8">
                    {/* Quick stats */}
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        { icon: Star, label: "امتیاز", value: doctor.rating.toFixed(1) },
                        { icon: User, label: "نظرات", value: doctor.reviews.toString() },
                        { icon: Clock, label: "تجربه", value: `${doctor.experience} سال` },
                        { icon: Award, label: "گواهینامه", value: doctor.certifications.length.toString() },
                      ].map((stat, i) => (
                        <div key={i} className="text-center p-4 rounded-xl bg-muted/50">
                          <stat.icon className="size-5 text-primary mx-auto mb-2" />
                          <div className="font-bold text-lg">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Bio */}
                    <div>
                      <h3 className="text-xl font-bold mb-3">درباره پزشک</h3>
                      <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
                    </div>

                    {/* Education */}
                    <div>
                      <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
                        <GraduationCap className="size-5 text-primary" />
                        تحصیلات و سوابق
                      </h3>
                      <div className="space-y-3">
                        {doctor.education.map((edu, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                            <div className="size-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-sm">{edu}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div>
                      <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
                        <Award className="size-5 text-primary" />
                        گواهینامه‌ها و عضویت‌ها
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.certifications.map((cert) => (
                          <Badge key={cert} variant="secondary" className="bg-primary/10 text-primary border border-primary/20">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div>
                      <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
                        <Languages className="size-5 text-primary" />
                        زبان‌های صحبت
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.languages.map((lang) => (
                          <span key={lang} className="px-3 py-1 rounded-full bg-muted text-sm">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <AppointmentDialog defaultDoctor={doctor.slug}>
                      <Button className="w-full bg-gradient-to-l from-teal-700 to-cyan-800 text-white gap-2 h-12">
                        <Calendar className="size-5" />
                        دریافت نوبت از این پزشک
                      </Button>
                    </AppointmentDialog>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-muted-foreground">پزشکی با این مشخصات یافت نشد.</p>
          </div>
        )}
      </div>
    </section>
  );
}
