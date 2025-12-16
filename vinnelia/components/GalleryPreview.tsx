"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GalleryModal from "./GalleryModal"

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
]

export default function GalleryPreview() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-24 px-6 bg-[#f7f3ee]">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair text-3xl md:text-4xl text-center mb-14"
        >
          Galeri Kami
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setActive(src)}
            >
              <img
                src={src}
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </motion.div>
          ))}
        </div>

        <GalleryModal src={active ?? ""} onClose={() => setActive(null)} />
      </div>
    </section>
  )
}
