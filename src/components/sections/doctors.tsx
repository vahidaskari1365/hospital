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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, GraduationCap, Clock, Calendar, User, Search } from "lucide-react";
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

  const getInitials = (name: string) => {
    const parts = name.replace("دکتر ", "").split(" ");
    return parts.map((p) => p[0]).join("").slice(0, 2);
  };

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-gradient-medical relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <User className="size-4" />
            کادر پزشکی
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            پزشکان <span className="text-gradient-medical">متخصص</span> ما
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            با پزشکانی که هر یک پیشگام حوزه تخصصی خود هستند، در مسیر سلامت شما قدم برمی‌داریم.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              size="sm"
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              همه پزشکان
            </Button>
            {DEPARTMENTS.slice(0, 6).map((d) => (
              <Button
                key={d.slug}
                size="sm"
                variant={filter === d.slug ? "default" : "outline"}
                onClick={() => setFilter(d.slug)}
                className="rounded-full"
              >
                {d.name}
              </Button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="جستجوی پزشک..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pr-10 pl-4 py-2 rounded-full border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        {/* Doctors grid */}
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
                <Card className="group relative h-full overflow-hidden p-6 border-0 bg-white shadow-medical hover:shadow-medical-lg transition-all duration-300 cursor-pointer">
                  {/* Top accent */}
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-primary to-cyan-400" />

                  {/* Avatar */}
                  <div className="flex items-start justify-between mb-4">
                    <Avatar className="size-16 ring-4 ring-primary/10">
                      <AvatarFallback className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white text-xl font-bold">
                        {getInitials(doctor.name)}
                      </AvatarFallback>
                    </Avatar>
                    {doctor.available ? (
                      <Badge variant="default" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-0">
                        <span className="size-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse" />
                        پذیرش
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-0">
                        تکمیل ظرفیت
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-lg font-bold mb-1">{doctor.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{doctor.title}</p>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{doctor.specialty}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="size-3.5 text-amber-400 fill-amber-400" />
                      <span className="font-bold text-foreground">{doctor.rating.toFixed(1)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="size-3.5" />
                      <span>{doctor.experience} سال تجربه</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1">مشاهده پروفایل</Button>
                    </DialogTrigger>
                    <AppointmentDialog defaultDoctor={doctor.slug}>
                      <Button size="sm" className="flex-1 bg-gradient-to-l from-teal-600 to-cyan-700 text-white">
                        نوبت
                      </Button>
                    </AppointmentDialog>
                  </div>

                  <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{doctor.name}</DialogTitle>
                      <DialogDescription className="text-base">
                        {doctor.title} - {doctor.specialty}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 pt-4">
                      <div className="flex items-start gap-4">
                        <Avatar className="size-20 ring-4 ring-primary/10 flex-shrink-0">
                          <AvatarFallback className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white text-2xl font-bold">
                            {getInitials(doctor.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="secondary">{departmentName(doctor.department)}</Badge>
                            {doctor.available && (
                              <Badge variant="default" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-0">
                                در حال پذیرش
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Star className="size-4 text-amber-400 fill-amber-400" />
                              <span className="font-bold">{doctor.rating.toFixed(1)}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="size-4" />
                              <span>{doctor.experience} سال تجربه</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold mb-2 text-lg">درباره پزشک</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{doctor.bio}</p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-3 text-lg flex items-center gap-2">
                          <GraduationCap className="size-5 text-primary" />
                          تحصیلات و سوابق
                        </h4>
                        <ul className="space-y-2">
                          {doctor.education.map((edu, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <div className="size-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              <span>{edu}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <AppointmentDialog defaultDoctor={doctor.slug}>
                        <Button className="w-full bg-gradient-to-l from-teal-600 to-cyan-700 text-white gap-2">
                          <Calendar className="size-4" />
                          دریافت نوبت از این پزشک
                        </Button>
                      </AppointmentDialog>
                    </div>
                  </DialogContent>
                </Card>
              </Dialog>
              </motion.div>
            ))}
          </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            پزشکی با این مشخصات یافت نشد.
          </div>
        )}
      </div>
    </section>
  );
}
