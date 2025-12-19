"use client"

import { motion } from "framer-motion"
import { Home, Image, CalendarDays, Mail } from "lucide-react"
import FloatingMenu from "@/components/FloatingMenu"
import GalleryPreview from "@/components/GalleryPreview"



export default function OpenPage() {
  return (
    <main className="bg-[#f7f3ee] text-neutral-900 relative">

   {/* 1. HERO */}
<section
  id="home"
  className="relative min-h-screen w-full overflow-hidden"
>
  {/* Background Image */}
  <img
    src="/imagese/gallery/thumbs/4.jpg"
    alt="Wedding Cover"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 text-white"
  >
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-xs tracking-[0.4em] mb-6 text-white/80"
    >
      WEDDING INVITATION
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="font-playfair text-4xl md:text-6xl leading-tight mb-6"
    >
      Kevin Immanuel
      <div className="opacity-90 my-2">&</div> 
      Theresia Nathalia Biantoro
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-sm md:text-base text-white/80"
    >
      Minggu · 28 Desember 2025
    </motion.p>
  </motion.div>

  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.4 }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 text-xs flex flex-col items-center"
  >
    <span className="mb-1">Scroll</span>
    <span className="animate-bounce">↓</span>
  </motion.div>
</section>

      {/* 2. GALLERY */}
      <GalleryPreview />
      
      {/* 6. FOOTER */}
      <footer className="py-12 text-center text-sm text-neutral-500">
        © 2026 Kevin & Theresia
      </footer>

      <FloatingMenu />
    </main>
  )
}
