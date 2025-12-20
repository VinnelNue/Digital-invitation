"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import GuestName from "@/components/GuestName";
import '@fontsource/great-vibes/400.css';
import '@fontsource/poppins/400.css';

export default function Invite() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = () => {
    audioRef.current?.play().catch(() => console.log("Audio diblokir, tunggu interaksi"));
    router.push("/open");
  };

  return (
    <main
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(214, 229, 255, 0.4), rgba(48, 51, 58, 0.4)), url('/images/gallery/22.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Audio */}
      <audio ref={audioRef} src="/audio/river_flow_in_you.mp3" loop />

      {/* Couple Names */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center mb-8"
      >
        <h1 className="font-great-vibes italic text-5xl md:text-6xl text-white">
          Kevin Immanuel
        </h1>
        <div className="opacity-70 text-3xl md:text-4xl my-2 text-white">&</div>
        <h1 className="font-great-vibes italic text-5xl md:text-6xl text-white">
          Theresia Nathalia Biantoro
        </h1>
      </motion.div>

      {/* Guest Name */}
      <GuestName />

      {/* Button Buka Undangan */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,0,150,0.4)" }}
        onClick={handleOpen}
        className="px-12 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-xl transition-transform duration-300"
      >
        Buka Undangan
      </motion.button>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-4 w-full text-center"
      >
        <p className="text-xs text-neutral-300">
          &copy; 2025 Kevin Immanuel & Theresia Nathalia Biantoro. All rights reserved.
        </p>
      </motion.footer>
    </main>
  );
}
