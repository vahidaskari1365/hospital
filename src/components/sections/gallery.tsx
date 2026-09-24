"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Camera, Image as ImageIcon, Play, X } from "lucide-react";

const GALLERY_ITEMS = [
  { id: 1, title: "ساختمان بیمارستان", category: "building", type: "image", gradient: "from-teal-400 to-cyan-600" },
  { id: 2, title: "اتاق عمل پیشرفته", category: "facilities", type: "image", gradient: "from-emerald-400 to-teal-600" },
  { id: 3, title: "بخش ICU", category: "facilities", type: "image", gradient: "from-rose-400 to-pink-600" },
  { id: 4, title: "تجهیزات MRI", category: "equipment", type: "image", gradient: "from-violet-400 to-purple-600" },
  { id: 5, title: " lobby بیماران", category: "interior", type: "image", gradient: "from-amber-400 to-orange-600" },
  { id: 6, title: "بخش اطفال", category: "departments", type: "image", gradient: "from-cyan-400 to-blue-600" },
  { id: 7, title: "بخش زنان و زایمان", category: "departments", type: "image", gradient: "from-pink-400 to-rose-600" },
  { id: 8, title: "مراسم روز پزشک", category: "events", type: "video", gradient: "from-indigo-400 to-blue-600" },
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
    <section id="gallery" className="py-20 lg:py-28 bg-gradient-medical relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-grid opacity-30" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Camera className="size-4" />
            گالری تصاویر
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            نگاهی به <span className="text-gradient-medical">بیمارستان</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            با فضاها، تجهیزات و امکانات بیمارستان شفای نوین بیشتر آشنا شوید.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
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

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelected(item)}
              className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br ${item.gradient} shadow-medical hover:shadow-medical-lg transition`}
            >
              <div className="absolute inset-0 bg-pattern-dots opacity-20" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />

              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                {item.type === "video" ? (
                  <div className="size-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 transition">
                    <Play className="size-7 text-white fill-white mr-1" />
                  </div>
                ) : (
                  <ImageIcon className="size-10 text-white/70 group-hover:scale-110 transition" />
                )}
              </div>

              {/* Title */}
              <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <p className="text-white text-xs font-medium">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selected && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`relative w-full max-w-2xl aspect-video rounded-2xl bg-gradient-to-br ${selected.gradient} overflow-hidden shadow-2xl`}
            >
              <div className="absolute inset-0 bg-pattern-dots opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="size-24 text-white/80" />
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 left-4 size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition"
              >
                <X className="size-5" />
              </button>
              <div className="absolute bottom-0 right-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-xl font-bold">{selected.title}</h3>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
