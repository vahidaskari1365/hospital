"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Camera, Play, X } from "lucide-react";

const GALLERY_ITEMS = [
  { id: 1, title: "ساختمان اصلی بیمارستان", category: "building", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80" },
  { id: 2, title: "اتاق عمل پیشرفته", category: "facilities", image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80" },
  { id: 3, title: "بخش مراقبت‌های ویژه", category: "facilities", image: "https://images.unsplash.com/photo-1519494026890-80ed4e7c4b15?w=800&q=80" },
  { id: 4, title: "تجهیزات MRI پیشرفته", category: "equipment", image: "https://images.unsplash.com/photo-1559757175-08fda86d0b1d?w=800&q=80" },
  { id: 5, title: " lobby پذیرش بیماران", category: "interior", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
  { id: 6, title: "بخش اطفال", category: "departments", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" },
  { id: 7, title: "آزمایشگاه تشخیصی", category: "equipment", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80" },
  { id: 8, title: "مراسم روز پزشک", category: "events", type: "video", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80" },
];

const CATEGORIES = [
  { id: "all", label: "همه" },
  { id: "building", label: "ساختمان" },
  { id: "facilities", label: "امکانات" },
  { id: "equipment", label: "تجهیزات" },
  { id: "departments", label: "بخش‌ها" },
  { id: "events", label: "رویدادها" },
];

export function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const filtered = GALLERY_ITEMS.filter((item) => filter === "all" || item.category === filter);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="eyebrow mb-4 inline-block">گالری</div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            نگاهی به <span className="text-gradient-teal">شفای نوین</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            با فضاها، تجهیزات و امکانات بیمارستان شفای نوین بیشتر آشنا شوید.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat.id}
              size="sm"
              variant={filter === cat.id ? "default" : "outline"}
              onClick={() => setFilter(cat.id)}
              className="rounded-full"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelected(item)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-card hover:shadow-floating transition-all ${
                idx % 5 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Video icon */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center">
                    <Play className="size-6 text-white fill-white mr-1" />
                  </div>
                </div>
              )}

              {/* Title */}
              <div className="absolute bottom-0 right-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-bold">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-4 left-4 size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white">
              <X className="size-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 right-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                <h3 className="text-white text-xl font-bold">{selected.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
