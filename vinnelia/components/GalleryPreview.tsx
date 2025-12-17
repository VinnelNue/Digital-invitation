"use client"

import { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import Image from "next/image"
import GalleryModal from "./GalleryModal"

// 1. Definisikan Tipe Data
interface ImageItem {
  id: number
  thumb: string
  full: string
}

const images: ImageItem[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  thumb: `/images/gallery/thumbs/${i + 1}.jpg`,
  full: `/images/gallery/${i + 1}.jpg`,
}))

export default function GalleryPreview() {
  const [active, setActive] = useState<ImageItem | null>(null)

  // 2. Definisikan Animasi dengan tipe Variants agar tidak error merah
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  }

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-playfair text-4xl text-center mb-16 text-neutral-800"
      >
        Our Moments
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {images.map((img, i) => (
          <motion.div
            key={img.id}
            variants={itemVariants}
            className="relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer bg-neutral-200 group"
            onClick={() => setActive(img)}
          >
            <Image
              src={img.thumb}
              alt={`Moment ${img.id}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={i < 4} // Load 4 gambar pertama lebih cepat
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/40 px-4 py-2 rounded-full backdrop-blur-sm">
                View Photo
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {active && (
          <GalleryModal
            src={active.full}
            thumbs={active.thumbs}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}