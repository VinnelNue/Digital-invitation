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
  const [bg, setBg] = useState(backgrounds[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setBg((prev) => {
        let next = prev
        while (next === prev) {
          next = backgrounds[Math.floor(Math.random() * backgrounds.length)]
        }
        return next
      })
    }, 10000) // ganti tiap 10 detik

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="bubble"
      className="relative min-h-screen py-20 px-4 overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bg}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-10 text-white">
          Undangan & RSVP
        </h2>

        <BubbleModel onSelect={setSelected} />
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 max-w-sm text-center"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h3 className="text-xl font-bold mb-2">
              {selected.name}
            </h3>
            <p className="text-gray-700">
              {selected.message || "Tidak ada pesan"}
            </p>

            <button
              className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-full"
              onClick={() => setSelected(null)}
            >
              Tutup
            </button>
          </motion.div>
        </div>
      )}
    </section>
  )
}
