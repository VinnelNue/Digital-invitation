"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-20"
      >
        <h1 className="text-4xl font-playfair font-bold">Kevin & Pasangan</h1>
        <p className="mt-2 text-gray-600 font-inter">
          Dengan penuh sukacita mengundang Anda dalam momen bahagia kami
        </p>
      </motion.div>

      {/* Tanggal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-16 text-center"
      >
        <p className="text-xl font-playfair">Sabtu, 14 Februari 2026</p>
      </motion.div>

      {/* Tombol navigasi */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-16 flex flex-col gap-4"
      >
        <a
          href="/invite"
          className="px-8 py-3 bg-black text-white rounded-full font-inter"
        >
          Lihat Undangan
        </a>
        <a
          href="/gallery"
          className="px-8 py-3 border border-black rounded-full font-inter"
        >
          Galeri
        </a>
        <a
          href="/rsvp"
          className="px-8 py-3 border border-black rounded-full font-inter"
        >
          RSVP
        </a>
      </motion.div>
    </div>
  );
}
