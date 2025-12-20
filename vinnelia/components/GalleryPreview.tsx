"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import Image from "next/image"
import GalleryModal from "./GalleryModal"

interface ImageItem {
  id: number
  thumb: string
  full: string
}

/* ===== KONFIG ===== */
const TOTAL_IMAGES = 24
const SHOW_COUNT = 9
const CHANGE_INTERVAL = 8000 // 8 detik

/* ===== BUAT POOL GAMBAR ===== */
const imagePool: ImageItem[] = Array.from(
  { length: TOTAL_IMAGES },
  (_, i) => ({
    id: i + 1,
    thumb: `/images/gallery/thumbs/${i + 1}.jpg`,
    full: `/images/gallery/${i + 1}.jpg`,
  })
)

/* ===== RANDOM PICK ===== */
function getRandomImages() {
  return [...imagePool]
    .sort(() => Math.random() - 0.5)
    .slice(0, SHOW_COUNT)
}

export default function GalleryPreview() {
  const [images, setImages] = useState<ImageItem[]>(getRandomImages())
  const [active, setActive] = useState<ImageItem | null>(null)

  /* ===== AUTO SHUFFLE ===== */
  useEffect(() => {
    const interval = setInterval(() => {
      setImages(getRandomImages())
    }, CHANGE_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="gallery" className="bg-[#F9F7F2]">
      {/* HEADER */}
      <div className="bg-[#1a1a1a] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif italic"
          >
            Our Moments
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 leading-relaxed text-sm md:text-base"
          >
            Every photograph tells a story —  
            a memory of love, laughter, and the beginning of forever.
          </motion.p>
        </div>
      </div>

      {/* GALLERY */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {images.map((img, i) => (
              <motion.div
                key={img.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setActive(img)}
                className={`
                  relative
                  ${i % 3 === 0 ? "aspect-[3/5]" : "aspect-[3/4]"}
                  overflow-hidden
                  rounded-[2.5rem]
                  cursor-pointer
                  group
                  bg-neutral-200
                  shadow-xl
                `}
              >
                <Image
                  src={img.thumb}
                  alt={`Wedding Moment ${img.id}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white text-xs tracking-widest uppercase border border-white/60 px-6 py-2 rounded-full backdrop-blur-md">
                    View Photo
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* MODAL */}
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
