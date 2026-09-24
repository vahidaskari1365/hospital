"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Newspaper, ArrowLeft, Calendar, User, Eye } from "lucide-react";
import { NEWS } from "@/lib/hospital-data";

const categoryLabels: Record<string, string> = {
  news: "خبر",
  campaign: "کمپین",
  article: "مقاله",
  "health-tip": "نکته سلامت",
};

const categoryColors: Record<string, string> = {
  news: "bg-cyan-100 text-cyan-700 hover:bg-cyan-100",
  campaign: "bg-rose-100 text-rose-700 hover:bg-rose-100",
  article: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  "health-tip": "bg-amber-100 text-amber-700 hover:bg-amber-100",
};

const imageGradients: Record<string, string> = {
  mri: "from-cyan-500 to-blue-600",
  heart: "from-rose-500 to-red-600",
  doctor: "from-emerald-500 to-teal-600",
  diabetes: "from-amber-500 to-orange-600",
  kidney: "from-violet-500 to-purple-600",
  "heart-tips": "from-pink-500 to-rose-600",
};

function NewsImage({ image, title }: { image: string; title: string }) {
  const gradient = imageGradients[image] || "from-teal-500 to-cyan-600";
  return (
    <div className={`relative aspect-[16/10] bg-gradient-to-br ${gradient} overflow-hidden`}>
      <div className="absolute inset-0 bg-pattern-dots opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Newspaper className="size-16 text-white/80" />
      </div>
      <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/40 to-transparent p-3">
        <p className="text-white text-xs font-medium line-clamp-1">{title}</p>
      </div>
    </div>
  );
}

export function News() {
  const featured = NEWS.filter((n) => n.featured).slice(0, 1)[0];
  const others = NEWS.filter((n) => n.slug !== featured?.slug).slice(0, 5);

  return (
    <section id="news" className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Newspaper className="size-4" />
              اخبار و مقالات
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              آخرین <span className="text-gradient-medical">اخبار</span> پزشکی
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              از جدیدترین رویدادهای بیمارستان و مقالات آموزشی تخصصی پزشکان ما باخبر شوید.
            </p>
          </div>
          <Button variant="outline" className="gap-2 self-start">
            مشاهده همه
            <ArrowLeft className="size-4" />
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured news */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:row-span-2"
            >
              <Card className="group h-full overflow-hidden border-0 bg-white shadow-medical hover:shadow-medical-lg transition-all duration-300 cursor-pointer">
                <div className="relative">
                  <NewsImage image={featured.image} title={featured.title} />
                  <div className="absolute top-4 right-4">
                    <Badge className={categoryColors[featured.category]}>
                      {categoryLabels[featured.category]}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition">
                    {featured.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                    <span className="flex items-center gap-1.5">
                      <User className="size-3.5" />
                      {featured.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-3.5" />
                      {featured.date}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Other news */}
          <div className="grid gap-4">
            {others.map((news, idx) => (
              <motion.div
                key={news.slug}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="group flex gap-4 p-4 border border-border bg-white hover:shadow-medical transition-all duration-300 cursor-pointer">
                  <div className="w-32 flex-shrink-0">
                    <NewsImage image={news.image} title={news.title} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Badge
                      variant="secondary"
                      className={`mb-1.5 text-xs ${categoryColors[news.category]}`}
                    >
                      {categoryLabels[news.category]}
                    </Badge>
                    <h4 className="font-bold text-sm mb-1.5 line-clamp-2 group-hover:text-primary transition">
                      {news.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{news.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        {news.date}
                      </span>
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
