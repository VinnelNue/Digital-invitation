"use client";

import { motion } from "framer-motion";

export default function OpenPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image kamu taruh sendiri */}
      <img
        src="/images/backgroundcover.jpg"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-white"
      >
        <h1 className="text-5xl font-playfair font-bold tracking-wide">
          Vinnelia
        </h1>

        <p className="mt-3 text-lg opacity-90 font-inter">
          Undangan Pernikahan Digital
        </p>

        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-10 py-3 bg-white text-black rounded-full shadow-xl font-medium font-inter"
        >
          Buka Undangan
        </motion.a>
      </motion.div>
    </div>
  );
}
