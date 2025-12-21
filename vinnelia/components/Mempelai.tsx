"use client"

import { motion } from "framer-motion"

export default function Mempelai() {
  return (
    <section
      id="mempelai"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden text-white"
    >
      {/* Background Gradien Cerah */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-50 to-white" />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_140px_rgba(0,0,0,0.2)]" />

      {/* Ayat atas */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-white/70 text-black/90 backdrop-blur-sm p-4 text-center text-sm md:text-base"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        "Tidak baik kalau manusia itu seorang diri saja. Aku akan menjadikan penolong baginya yang sepadan dengan dia," — Kejadian 2:18
      </motion.div>

      {/* Groom - atas kiri */}
      <div className="absolute top-20 left-12 flex flex-col md:flex-row items-start gap-4">
        <motion.div
          className="w-36 h-36 md:w-48 md:h-48 rounded-lg overflow-hidden border-4 border-white shadow-lg flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <img src="/images/profil/1.jpg" alt="Mempelai Pria" className="object-cover w-full h-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-xs text-black bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-md text-sm md:text-base space-y-2"
        >
          <p className="font-bold text-lg">Kevin Immanuel</p>
          <p>Putra pertama dari Bapak Suliyanto & Ibu Veriyana</p>
        </motion.div>
      </div>

      {/* Bride - bawah kanan */}
      <div className="absolute bottom-20 right-12 flex flex-col md:flex-row-reverse items-end gap-4">
        <motion.div
          className="w-36 h-36 md:w-48 md:h-48 rounded-lg overflow-hidden border-4 border-white shadow-lg flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img src="/images/profil/2.jpg" alt="Mempelai Perempuan" className="object-cover w-full h-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-xs text-black bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-md text-sm md:text-base space-y-2"
        >
          <p className="font-bold text-lg">Theresia Nathalia Biantoro</p>
          <p>Putri pertama dari Bapak Biantoro & Ibu Yenni</p>
        </motion.div>
      </div>

      {/* Ayat bawah */}
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-white/70 text-black/90 backdrop-blur-sm p-4 text-center text-sm md:text-base"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
       "Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia," — Matius 19:6
      </motion.div>
    </section>
  )
}
