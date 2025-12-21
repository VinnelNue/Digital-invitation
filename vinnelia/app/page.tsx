"use client";

import { motion } from "framer-motion";
import '@fontsource/great-vibes/400.css';
import '@fontsource/poppins/400.css';
import { useState, useEffect } from "react";
import Link from "next/link";

export default function LandingPage() {
  const [guestName, setGuestName] = useState<string | null>(null);

  useEffect(() => {
    const rawName = new URLSearchParams(window.location.search).get("to");
    if (rawName) setGuestName(decodeURIComponent(rawName));
  }, []);

  return (
    <main
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(214, 229, 255, 0.4), rgba(48, 51, 58, 0.4)), url('/images/gallery/12.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="flex flex-col items-center justify-start text-center text-white w-full max-w-xl"
        style={{ paddingTop: "5rem" }} // ruang dari top
      >
        {/* THE WEDDING OF di top */}
        <p className="font-poppins text-lg md:text-xl tracking-widest opacity-70 mb-8">
          THE WEDDING OF
        </p>

        {/* Nama pengantin */}
        <h1 className="font-great-vibes italic text-5xl md:text-6xl">Kevin Immanuel</h1>
        <div className="opacity-70 text-3xl md:text-4xl my-2">&</div>
        <h1 className="font-great-vibes italic text-5xl md:text-6xl">Theresia Nathalia Biantoro</h1>

        {/* Guest Name */}
        {guestName && (
          <div className="mt-12 text-center text-white italic space-y-1">
            <p className="text-base md:text-lg">Yth. Bapak/Ibu/Saudara/i</p>
            <p className="text-lg md:text-xl font-semibold">{guestName}</p>
            <p className="text-base md:text-lg">Tanpa mengurangi rasa hormat,</p>
            <p className="text-base md:text-lg">
              kami mengundang anda untuk menghadiri acara pernikahan kami.
            </p>
          </div>
        )}
      </motion.div>

      {/* Button Buka Undangan */}
      <Link
        href={guestName ? `/open?to=${encodeURIComponent(guestName)}` : "/open"}
        className="px-12 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-xl transition-transform duration-300"
      >
        Buka Undangan
      </Link>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-4 w-full text-center text-white"
      >
        <p className="text-xs text-neutral-300">
          &copy; 2025 Kevin Immanuel & Theresia Nathalia Biantoro. All rights reserved.
        </p>
      </motion.footer>
    </main>
  );
}
