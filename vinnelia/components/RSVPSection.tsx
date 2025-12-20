"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { supabase } from "@/lib/supabase"
import RSVPBackground from "@/components/RSVPBackground"

export default function RSVPSection() {
  const [name, setName] = useState("")
  const [status, setStatus] = useState("Hadir")
  const [jumlahTamu, setJumlahTamu] = useState(1)
  const [message, setMessage] = useState("")
  const [fromColor, setFromColor] = useState("#fbc2eb")
  const [toColor, setToColor] = useState("#a6c1ee")

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess(false)

    const { error } = await supabase.from("rsvp").insert([
      {
        name,
        status,
        jumlah_tamu: jumlahTamu,
        message,
        from_color: fromColor,
        to_color: toColor,
      },
    ])

    if (error) {
      setError(error.message)
    } else {
      setSuccess(true)
      setName("")
      setMessage("")
      setJumlahTamu(1)
      setStatus("Hadir")
    }
  }

  return (
    <section
      id="rsvp"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* BACKGROUND BERJALAN */}
      <RSVPBackground />

      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative z-10
          max-w-md mx-auto
          bg-white/80 backdrop-blur
          rounded-[2rem]
          p-8
          shadow-[0_40px_80px_rgba(0,0,0,0.15)]
          border border-neutral-200
        "
      >
        <h2 className="font-playfair text-3xl text-center mb-2">
          Konfirmasi Kehadiran
        </h2>
        <p className="text-center text-sm text-neutral-600 mb-8">
          Kehadiran Anda adalah kehormatan bagi kami
        </p>

        {success && (
          <p className="text-green-600 text-center mb-4">
            RSVP berhasil dikirim 🙏
          </p>
        )}

        {error && (
          <p className="text-red-600 text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <Field label="Nama Lengkap">
            <input
              className="input"
              required
              value={name}
              onChange={e => setName(e.target.value)}
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
              <input
                type="color"
                value={fromColor}
                onChange={e => setFromColor(e.target.value)}
              />
              <input
                type="color"
                value={toColor}
                onChange={e => setToColor(e.target.value)}
              />
            </div>
          </Field>

          <button
            type="submit"
            className="
              w-full mt-6 py-3 rounded-full
              bg-neutral-900 text-white
              flex items-center justify-center gap-2
              hover:-translate-y-0.5 transition
            "
          >
            <Send size={16} /> Kirim RSVP
          </button>
        </form>
      </motion.div>
    </section>
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
