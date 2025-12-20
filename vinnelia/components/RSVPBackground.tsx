"use client"

import { motion } from "framer-motion"

export default function RSVPBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* BASE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-blue-100" />

      {/* BLOB 1 */}
      <motion.div
        animate={{ x: [0, 120, 0], y: [0, -80, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[500px] h-[500px] bg-pink-300/40 rounded-full blur-3xl top-[-200px] left-[-200px]"
      />

      {/* BLOB 2 */}
      <motion.div
        animate={{ x: [0, -120, 0], y: [0, 100, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute w-[500px] h-[500px] bg-blue-300/40 rounded-full blur-3xl bottom-[-200px] right-[-200px]"
      />
    </div>
  )
}
