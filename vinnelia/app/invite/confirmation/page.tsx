"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ConfirmationPage() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!name || !status) {
      alert("Harap isi nama dan pilih status kehadiran.");
      return;
    }

    alert(`Terima kasih ${name}! Status kamu: ${status}`);
  };

  return (
    <main className="min-h-screen bg-[#070712] text-white p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#0b0b18] rounded-2xl p-8 w-full max-w-lg"
      >
        <h1 className="text-center text-4xl font-playfair mb-10 drop-shadow-[0_0_20px_rgba(138,43,226,0.8)]">
          Konfirmasi Kehadiran
        </h1>

        <form onSubmit={handleSubmit} className="space-y-7">

          {/* Input Nama */}
          <div>
            <label className="block mb-2 text-gray-300">Nama Tamu</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#1a1a2e] text-white focus:ring-2 focus:ring-indigo-500"
              placeholder="Masukkan nama kamu"
            />
          </div>

          {/* Input Status Kehadiran */}
          <div>
            <label className="block mb-2 text-gray-300">Status Kehadiran</label>
            <select
              required
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#1a1a2e] text-white focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Pilih status</option>
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
            </select>
          </div>

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition p-3 rounded-lg font-semibold"
          >
            Konfirmasi
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
}
