"use client"

import { useState } from "react"
import BubbleModel from "@/components/BubbleModel"
import { motion } from "framer-motion"
import FloatingMenu from "@/components/FloatingMenu"


export default function BubblePage() {
  const [selected, setSelected] = useState<any>(null)

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start py-16 px-4
    bg-[url('/images/gallery/thumbs/12.jpg')] bg-cover bg-center
    before:absolute before:inset-0 before:bg-black/20 before:backdrop-blur-sm">

<div className="relative z-10 w-full flex flex-col items-center">
  <h1 className="text-4xl font-bold mb-8 text-center text-white drop-shadow-lg">
    Undangan & RSVP
  </h1>

  <BubbleModel onSelect={setSelected} />
</div>

      {/* Modal pesan */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
            <p className="text-gray-700">{selected.message || "Tidak ada pesan"}</p>
            <button
              className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
              onClick={() => setSelected(null)}
            >
              Tutup
            </button>
          </motion.div>
        </div>
      )}
      <FloatingMenu />
    </main>
  )
}
