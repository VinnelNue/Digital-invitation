"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import GalleryModal from "./GalleryModal"

interface ImageItem {
  id: number
  thumb: string
  full: string
}

/* ===== KONFIG ===== */
const TOTAL_IMAGES = 24
const SHOW_COUNT = 9

/* ===== IMAGE POOL ===== */
const imagePool: ImageItem[] = Array.from(
  { length: TOTAL_IMAGES },
  (_, i) => ({
    id: i + 1,
    thumb: `/images/gallery/thumbs/${i + 1}.jpg`,
    full: `/images/gallery/${i + 1}.jpg`,
  })
)

/* ===== BAGI JADI PAGE ===== */
function chunkArray<T>(arr: T[], size: number) {
  const result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

export default function GalleryPreview() {
  const [page, setPage] = useState(0)
  const [active, setActive] = useState<ImageItem | null>(null)

  /* RANDOM SEKALI SAJA */
  const pages = useMemo(() => {
    const shuffled = [...imagePool].sort(() => Math.random() - 0.5)
    return chunkArray(shuffled, SHOW_COUNT)
  }, [])

  const images = pages[page]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
    exit: { opacity: 0 },
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
      transition: { duration: 0.4 },
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

      {/* GALLERY GRID */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {images.map((img, i) => (
              <motion.div
                key={img.id}
                variants={itemVariants}
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
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white text-xs tracking-widest uppercase border border-white/60 px-6 py-2 rounded-full backdrop-blur-md">
                    View Photo
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* NAVIGATION */}
        <div className="flex justify-center gap-6 mt-16">
          <button
            disabled={page === 0}
            onClick={() => setPage(p => p - 1)}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 disabled:opacity-40 hover:bg-neutral-100 transition"
          >
            <ChevronLeft size={18} /> Previous
          </button>

          <button
            disabled={page === pages.length - 1}
            onClick={() => setPage(p => p + 1)}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 disabled:opacity-40 hover:bg-neutral-100 transition"
          >
            Next <ChevronRight size={18} />
          </button>
        </div>
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
