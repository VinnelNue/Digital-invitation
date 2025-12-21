"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"

export default function ClosingSection() {
  return (
    <section
      id="closing"
      className="relative min-h-screen flex items-center justify-center text-center px-6"
    >
      {/* Background foto dengan efek fade */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/images/background/closing-bg.jpg')" }}
      />

      {/* Overlay hitam tipis untuk membuat teks terbaca */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Box untuk teks */}
      <motion.div
        className="relative z-10 max-w-2xl bg-white/20 backdrop-blur-md rounded-3xl p-10 space-y-6 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-playfair tracking-wide text-white">
          Terima Kasih
        </h1>
        <p className="text-sm md:text-base text-white opacity-90">
          Atas doa dan kehadiran Anda di hari pernikahan kami.
        </p>

        <p className="text-lg md:text-xl font-semibold text-white mt-4">
          Kami yang berbahagia
        </p>

        <p className="text-lg md:text-xl font-semibold text-white mt-2">
          Kevin Immanuel & Theresia Nathalia Biantoro
        </p>

        <p className="text-xs md:text-sm text-white opacity-70">
          &copy; 2025 Vinnelia Wedding Invitation
        </p>

        {/* Icon Instagram */}
        <div className="flex justify-center mt-4">
          <a
            href="https://www.instagram.com/vin__nuel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-200 transition-colors"
          >
            <Instagram size={28} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
