"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import FloatingMenu from "@/components/FloatingMenu"

export default function RSVPPage() {
  const [name, setName] = useState("")
  const [status, setStatus] = useState("Hadir")
  const [jumlahTamu, setJumlahTamu] = useState(1)
  const [message, setMessage] = useState("")

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [fromColor, setFromColor] = useState("#fbc2eb")
  const [toColor, setToColor] = useState("#a6c1ee")


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess(false)

    try {
        const res = await fetch("http://localhost/Digital-invitation/vinnelia/backend/rsvp/rsvp_save.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, status, jumlah_tamu: jumlahTamu, message, fromColor, toColor }),
      })
      const data = await res.json()
      if (!res.ok || data.error) throw new Error(data.error || "Gagal mengirim RSVP")
      setSuccess(true)
      setName("")
      setStatus("Hadir")
      setJumlahTamu(1)
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f3ee] flex items-center justify-center px-4 py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          w-full max-w-md
          bg-white/80 backdrop-blur
          rounded-[2rem]
          p-8
          shadow-[0_40px_80px_rgba(0,0,0,0.15)]
          border border-neutral-200
        "
      >
        <h1 className="font-playfair text-3xl text-center mb-2">
          Konfirmasi Kehadiran
        </h1>
        <p className="text-center text-sm text-neutral-600 mb-6">
          Kehadiran Anda adalah kehormatan bagi kami
        </p>

        {success && <p className="text-green-600 text-center mb-4">RSVP berhasil dikirim!</p>}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <Field label="Nama Lengkap">
            <input
              type="text"
              className="input"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              placeholder="Nama Anda"
            />
          </Field>

          <Field label="Status Kehadiran">
            <select
              className="input"
              value={status}
              onChange={e => setStatus(e.target.value)}
            >
              <option>Hadir</option>
              <option>Tidak Hadir</option>
            </select>
          </Field>

          <Field label="Jumlah Tamu">
            <input
              type="number"
              min={1}
              className="input"
              value={jumlahTamu}
              onChange={e => setJumlahTamu(Number(e.target.value))}
            />
          </Field>

          <Field label="Ucapan & Doa">
            <textarea
              rows={4}
              className="input"
              placeholder="Tulis doa terbaik Anda"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </Field>

          <Field label="Warna Bubble">
          <div className="flex gap-4">
            <div>
              <label className="text-xs text-neutral-500">Warna Awal</label>
              <input
                type="color"
                value={fromColor}
                onChange={e => setFromColor(e.target.value)}
                className="w-16 h-8 cursor-pointer rounded-md"
              />
            </div>
            <div>
              <label className="text-xs text-neutral-500">Warna Akhir</label>
              <input
                type="color"
                value={toColor}
                onChange={e => setToColor(e.target.value)}
                className="w-16 h-8 cursor-pointer rounded-md"
              />
            </div>
          </div>
        </Field>

          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-full bg-neutral-900 text-white text-sm tracking-wide flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-all"
          >
            <Send size={16} /> Kirim RSVP
          </button>
        </form>
      </motion.div>

      <FloatingMenu />
    </main>
  )
}

function Field({ label, children }: any) {
  return (
    <div>
      <label className="text-xs text-neutral-500">{label}</label>
      <div className="mt-2">{children}</div>
    </div>
  )
}
