"use client"

import { motion } from "framer-motion"
import FloatingMenu from "@/components/FloatingMenu"

export default function InvitationPage() {
  return (
    <main className="bg-[#f7f3ee] text-neutral-900 relative">

      {/* SECTION 1 — OPENING */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl"
        >
          <p className="text-xs tracking-[0.35em] text-neutral-500 mb-6">
            THE WEDDING OF
          </p>

          <h1 className="font-playfair text-4xl md:text-5xl mb-6">
            Kevin Immanuel <br /> & <br /> Theresia Nathalia Biantoro
          </h1>

          <p className="text-sm text-neutral-600">
            Dengan penuh rasa syukur kepada Tuhan Yang Maha Esa,
            kami bermaksud mengundang Bapak/Ibu/Saudara/i
            untuk hadir dalam acara pernikahan kami.
          </p>
        </motion.div>
      </section>
      

      {/* SECTION 2 — ACARA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl mb-12">
            Detail Acara
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Akad */}
            <div className="bg-white/60 backdrop-blur rounded-3xl p-8 shadow-md">
              <h3 className="font-playfair text-xl mb-2">Pemberkatan</h3>
              <p className="text-sm text-neutral-600">
                Sabtu, 14 Februari 2026 <br />
                Pukul 09.00 WIB <br />
                Gereja XXX
              </p>
            </div>

            {/* Resepsi */}
            <div className="bg-white/60 backdrop-blur rounded-3xl p-8 shadow-md">
              <h3 className="font-playfair text-xl mb-2">Resepsi</h3>
              <p className="text-sm text-neutral-600">
                Sabtu, 14 Februari 2026 <br />
                Pukul 18.00 WIB <br />
                Gedung XXX
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-sm text-neutral-500">
        © 2026 Kevin & Theresia
      </footer>

      <FloatingMenu />
    </main>
  )
}
