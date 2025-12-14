"use client";

import { motion } from "framer-motion";

export default function Invite() {
  return (
    <div className="min-h-screen bg-[#050510] text-white relative overflow-hidden">

      {/* Neon Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 via-indigo-500/10 to-blue-700/20 blur-3xl opacity-60" />

      <div className="relative z-10 flex flex-col items-center px-6 py-20">
        
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-playfair font-bold tracking-wide drop-shadow-[0_0_20px_rgba(138,43,226,0.8)]"
        >
          Vinnelia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg mt-3 opacity-80 font-inter"
        >
          Digital Wedding Invitation
        </motion.p>

        {/* CARD FUTURISTIC */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-16 w-full max-w-md p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 shadow-[0_0_20px_rgba(0,0,0,0.4)]"
        >
          <div className="bg-[#0b0b18] rounded-2xl p-8">
            <h2 className="text-3xl font-playfair">Kevin Immanuel <p>&</p> Theresia Nathalia Biantoro</h2>

            <p className="mt-3 text-gray-300 font-inter">
              Dengan penuh sukacita mengundang Anda untuk merayakan hari istimewa kami.
            </p>

            <div className="mt-8 text-center">
              <p className="text-xl font-playfair">Sabtu, 14 Februari 2026</p>
              <p className="text-gray-300 mt-1 font-inter">Pukul: 10.00 WIB</p>
            </div>
          </div>
        </motion.div>

        {/* COUPLE SECTION */}
        <section className="mt-28 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-playfair mb-12"
          >
            The Bride & Groom
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            
            {/* Foto pria */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-44 h-44 rounded-full border border-purple-500/40 shadow-[0_0_20px_rgba(128,0,255,0.3)] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/Pria.jpg')" }}></div>
              <p className="mt-4 text-xl font-inter opacity-80">Theresia Nathalia Biantoro</p>
            </motion.div>

            {/* Batas Tengah */}
            <div className="h-16 w-px bg-gradient-to-b from-purple-500/40 via-indigo-400/40 to-blue-500/40 hidden md:block"></div>

            {/* Foto wanita */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-44 h-44 rounded-full border border-purple-500/40 shadow-[0_0_20px_rgba(128,0,255,0.3)] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/Wanita.jpg')" }}></div>
              <p className="mt-4 text-xl font-inter opacity-80">Theresia Nathalia Biantoro</p>
            </motion.div>

          </div>
        </section>

      </div> 
    </div>   
  );
}
