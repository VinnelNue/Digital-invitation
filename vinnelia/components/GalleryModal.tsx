"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

// Definisikan Interface Props agar tidak error merah pada src/thumb
interface GalleryModalProps {
  src: string
  thumb: string
  onClose: () => void
}

export default function GalleryModal({ src, thumb, onClose }: GalleryModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
      onClick={onClose}
    >
      {/* Tombol Close */}
      <button 
        className="absolute top-6 right-6 text-white/70 hover:text-white z-[110] transition-colors"
        onClick={onClose}
      >
        <X size={32} />
      </button>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full h-full max-w-5xl max-h-[85vh]"
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat gambar diklik
      >
        <Image
          src={src}
          alt="Wedding Moment Full"
          fill
          className="object-contain"
          quality={100}
          priority
          // Trik sakti: Pakai thumbnail sebagai placeholder blur
          placeholder="blur"
          blurDataURL={thumb}
        />
      </motion.div>
    </motion.div>
  )
}