"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

interface GalleryModalProps {
  src: string
  thumb: string
  onClose: () => void
}

export default function GalleryModal({ src, thumb, onClose }: GalleryModalProps) {
  // Base64 transparan agar tidak error saat placeholder="blur" dipanggil dengan path string
  const shimmer = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
      onClick={onClose}
    >
      {/* Tombol Close di Pojok Kanan Atas */}
      <button 
        className="absolute top-8 right-8 text-white/50 hover:text-white z-[110] transition-all hover:rotate-90 duration-300"
        onClick={onClose}
      >
        <X size={40} strokeWidth={1.5} />
      </button>

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full h-full max-w-4xl max-h-[80vh] rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt="Wedding Moment Full View"
          fill
          className="object-contain"
          quality={100}
          priority
          placeholder="blur"
          blurDataURL={shimmer} // Menggunakan base64 agar aman dari error runtime
        />
      </motion.div>
    </motion.div>
  )
}