"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"
import { CalendarDays, Clock, MapPin } from "lucide-react"

const backgrounds = [
  "/images/backgrounds/1.jpg",
  "/images/backgrounds/2.jpg",
  "/images/backgrounds/3.jpg",
]

export default function InviteSection() {
  const bg = useMemo(() => {
    return backgrounds[Math.floor(Math.random() * backgrounds.length)]
  }, [])

  return (
    <section
      id="invite"
      className="
        relative min-h-screen
        flex items-center justify-center
        text-white overflow-hidden
      "
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
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
            bg-white/85 backdrop-blur
            text-neutral-900
            rounded-3xl
            p-10
            shadow-[0_30px_60px_rgba(0,0,0,0.25)]
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
