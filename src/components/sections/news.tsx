"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Newspaper, ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { NEWS } from "@/lib/hospital-data";

const categoryLabels: Record<string, string> = {
  news: "خبر",
  campaign: "کمپین",
  article: "مقاله",
  "health-tip": "نکته سلامت",
};

const categoryColors: Record<string, string> = {
  news: "bg-cyan-100 text-cyan-700 hover:bg-cyan-100 border-0",
  campaign: "bg-rose-100 text-rose-700 hover:bg-rose-100 border-0",
  article: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-0",
  "health-tip": "bg-amber-100 text-amber-700 hover:bg-amber-100 border-0",
};

export function News() {
  const featured = NEWS.filter((n) => n.featured).slice(0, 2);
  const others = NEWS.filter((n) => !n.featured).slice(0, 4);

  return (
    <section id="news" className="py-24 lg:py-32 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <div className="eyebrow mb-4">اخبار و مقالات</div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              تازه‌های
              <br />
              <span className="text-gradient-teal">پزشکی و سلامت</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              از جدیدترین رویدادهای بیمارستان و مقالات آموزشی تخصصی پزشکان ما باخبر شوید.
            </p>
          </div>
          <Button variant="outline" className="gap-2 self-start lg:self-end">
            مشاهده همه
            <ArrowLeft className="size-4" />
          </Button>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured articles */}
          <div className="lg:col-span-7 space-y-8">
            {featured.map((news, idx) => (
              <motion.div
                key={news.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="group overflow-hidden border-0 bg-white shadow-card hover:shadow-floating transition-all cursor-pointer">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={categoryColors[news.category]}>
                          {categoryLabels[news.category]}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3" />
                          {news.date}
                        </span>
                        <span className="size-1 rounded-full bg-border" />
                        <span className="flex items-center gap-1">
                          <Clock className="size-3" />
                          {news.readTime}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                        {news.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <div className="size-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                            <User className="size-4 text-white" />
                          </div>
                          <span className="text-sm font-medium">{news.author}</span>
                        </div>
                        <ArrowLeft className="size-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other articles - list */}
          <div className="lg:col-span-5 space-y-4">
            {others.map((news, idx) => (
              <motion.div
                key={news.slug}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="group flex gap-4 p-4 border border-border bg-white hover:shadow-elevated transition-all cursor-pointer">
                  <div className="w-28 flex-shrink-0">
                    <div className="relative aspect-square rounded-xl overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Badge
                      variant="secondary"
                      className={`mb-2 text-xs ${categoryColors[news.category]}`}
                    >
                      {categoryLabels[news.category]}
                    </Badge>
                    <h4 className="font-bold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {news.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="size-3" />
                      {news.date}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
