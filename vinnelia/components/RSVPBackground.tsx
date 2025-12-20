"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const images = Array.from({ length: 12 }, (_, i) => `/images/gallery/thumbs/${i + 1}.jpg`)

export default function RSVPBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      
      {/* LEFT COLUMN (NAIK) */}
      <motion.div
        className="absolute left-4 top-0 flex flex-col gap-6 opacity-30 blur-[2px]"
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
      >
        {images.map((src, i) => (
          <div
            key={`left-${i}`}
            className="relative w-36 h-60 rounded-3xl overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              priority={i < 2}
            />
          </div>
        ))}
      </motion.div>

      {/* RIGHT COLUMN (TURUN) */}
      <motion.div
        className="absolute right-4 bottom-0 flex flex-col gap-6 opacity-30 blur-[2px]"
        animate={{ y: ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 70,
          ease: "linear",
        }}
      >
        {[...images].reverse().map((src, i) => (
          <div
            key={`right-${i}`}
            className="relative w-36 h-60 rounded-3xl overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* OVERLAY BIAR FORM FOKUS */}
      <div className="absolute inset-0 bg-[#f7f3ee]/90 backdrop-blur-sm" />
    </div>
  )
}
