"use client"

import { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import Image from "next/image"
import GalleryModal from "./GalleryModal"

interface ImageItem {
  id: number
  thumb: string
  full: string
}

const images: ImageItem[] = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  thumb: `/images/gallery/${i + 1}.jpg`,
  full: `/images/gallery/${i + 1}.jpg`,
}))

export default function GalleryPreview() {
  const [active, setActive] = useState<ImageItem | null>(null)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="bg-[#F9F7F2] min-h-screen">
      
      {/* --- BAGIAN HITAM DI ATAS (HEADER) --- */}
      <div className="bg-[#1a1a1a] text-white py-20 px-6 md:py-28">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif italic"
          >
            Our Moments
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed font-light md:text-right border-l md:border-l-0 md:border-r border-gray-700 pl-4 md:pl-0 md:pr-4"
          >
            The tender moments captured in our gallery are memories we will cherish forever. 
            Each photo tells a story of our love and the journey we share.
          </motion.p>
        </div>
      </div>

      {/* --- BAGIAN GALERI (KREM) --- */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              variants={itemVariants}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-[2.5rem] cursor-pointer bg-neutral-200 group shadow-xl"
              onClick={() => setActive(img)}
            >
              <Image
                src={img.thumb}
                alt={`Wedding Moment ${img.id}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-xs tracking-widest uppercase border border-white/50 px-6 py-2 rounded-full backdrop-blur-md">
                  View Photo
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <GalleryModal
            src={active.full}
            thumb={active.thumb}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}