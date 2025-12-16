"use client"

import { useState } from "react"
import { motion, AnimatePresence, Transition } from "framer-motion"
import GalleryModal from "./GalleryModal"

const images = Array.from({ length: 8 }, (_, i) => ({
  thumb: `/images/gallery/thumbs/${i + 1}.jpg`,
  full: `/images/gallery/${i + 1}.jpg`,
}))

export default function GalleryPreview() {
  const [active, setActive] = useState<{ thumb: string; full: string } | null>(null)

  // Transition TypeScript-safe
  const easeOutTransition: Transition = { duration: 0.6, ease: [0.42, 0, 0.58, 1] }
  const easeInTransition: Transition = { duration: 0.4, ease: [0.42, 0, 0.58, 1] }

  // Variants untuk item grid
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: easeOutTransition },
    exit: { opacity: 0, y: 30, transition: easeInTransition },
  }

  // Container untuk staggered children
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
        className="font-playfair text-3xl text-center mb-14"
      >
        Our Moments
      </motion.h2>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="relative group overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => setActive(img)}
          >
            {/* Thumbnail */}
            <motion.img
              src={img.thumb}
              loading="lazy"
              className="w-full h-64 object-cover rounded-2xl"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
              <span className="text-white text-sm tracking-wide opacity-0 group-hover:opacity-100 transition duration-500">
                View Photo
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <GalleryModal
            src={active.full}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
