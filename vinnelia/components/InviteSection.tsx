"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"
import { CalendarDays, Clock, MapPin } from "lucide-react"

const backgrounds = Array.from({ length: 20 }, (_, i) =>
  `/images/gallery/${i + 1}.jpg`
)


export default function InviteSection() {
  const bg = useMemo(
    () => backgrounds[Math.floor(Math.random() * backgrounds.length)],
    []
  )

  return (
    <section
      id="invite"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* ===== BACKGROUND IMAGE (CINEMATIC) ===== */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeInOut",
        }}
      />

      {/* ===== SOFT GRADIENT OVERLAY (BUKAN HITAM PEKAT) ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

      {/* ===== VIGNETTE (BIAR FOKUS KE TENGAH) ===== */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_140px_rgba(0,0,0,0.75)]" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 w-full px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-4xl md:text-5xl text-center mb-12"
        >
          Pemberkatan Pernikahan
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            max-w-xl mx-auto
            bg-white/90 backdrop-blur-md
            text-neutral-900
            rounded-3xl
            p-10
            shadow-[0_30px_80px_rgba(0,0,0,0.35)]
          "
        >
          <div className="space-y-6 text-sm md:text-base">
            <div className="flex items-center gap-4">
              <CalendarDays className="text-neutral-700" />
              <span>Sabtu, 14 Februari 2026</span>
            </div>

            <div className="flex items-center gap-4">
              <Clock className="text-neutral-700" />
              <span>Pukul 09.00 WIB</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-neutral-700" />
              <span>Gereja GKIN Getsemani</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
