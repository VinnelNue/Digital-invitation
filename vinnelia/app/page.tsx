"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Invite() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-[#f7f3ee] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 2 }}
          className="text-xs tracking-[0.35em] text-neutral-500 mb-8"
        >
          WEDDING INVITATION
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ delay: 0.6, duration: 2 }}
          className="font-playfair text-4xl md:text-5xl text-neutral-900 mb-6"
        >
            Kevin Immanuel
           <div className="opacity-90 my-2">&</div> 
           Theresia Nathalia Biantoro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-sm text-neutral-600 leading-relaxed mb-10"
        >
          Dengan penuh sukacita, kami mengundang Anda untuk menjadi bagian
          dari hari istimewa dalam perjalanan cinta kami.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          onClick={() => router.push("/open")}
          className="
            px-10 py-3 rounded-full
            bg-neutral-900 text-white text-sm tracking-wide
            shadow-[0_15px_35px_rgba(0,0,0,0.2)]
            hover:-translate-y-0.5 hover:shadow-[0_25px_45px_rgba(0,0,0,0.3)]
            transition-all
          "
        >
          Buka Undangan
        </motion.button>

      </div>
    </main>
  )
}
