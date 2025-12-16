"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function GalleryModal({
  src,
  onClose,
}: {
  src: string
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.img
            src={src}
            className="max-h-[85vh] rounded-xl shadow-2xl"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/80 hover:text-white"
          >
            <X size={28} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
