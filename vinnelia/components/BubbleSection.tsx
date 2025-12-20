"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import BubbleModel from "@/components/BubbleModel"

const backgrounds = [
  "/images/background/1.jpg",
  "/images/background/2.jpg",
  "/images/background/3.jpg",
  "/images/background/4.jpg",
]

export default function BubbleSection() {
  const [selected, setSelected] = useState<any>(null)
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((i) => (i + 1) % backgrounds.length)
    }, 12000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="bubble"
      className="relative min-h-screen overflow-hidden"
    >
      {/* ===== CINEMATIC BACKGROUND ===== */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bgIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ===== GRADIENT + VIGNETTE ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.8)]" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 flex flex-col items-center pt-28 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair text-white mb-12 text-center"
        >
          Wishes & Prayers
        </motion.h2>

        <BubbleModel onSelect={setSelected} />
      </div>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-sm w-[90%] text-center shadow-2xl"
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
            >
              <h3 className="text-xl font-semibold mb-3">
                {selected.name}
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                {selected.message || "Tidak ada pesan"}
              </p>

              <button
                className="mt-6 px-6 py-2 rounded-full bg-neutral-900 text-white text-sm hover:scale-105 transition"
                onClick={() => setSelected(null)}
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
            {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mb-4 text-center"
      >
        <p className="text-xs text-neutral-300">
          &copy; 2025 Kevin Immanuel & Theresia Nathalia Biantoro. All rights reserved.
        </p>
      </motion.footer>
    </section>
    
  )
}
