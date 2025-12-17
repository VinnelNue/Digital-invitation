"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { supabase } from "@/lib/supabase" // Import koneksi supabase kamu

type RSVP = {
  name: string
  message: string
  from_color: string
  to_color: string
}

type Bubble = RSVP & {
  x: number
  y: number
  size: number
  floatDuration: number
}

function generateNonOverlappingPositions(bubbles: Bubble[], areaWidth: number, areaHeight: number, maxAttempts = 100) {
  const placed: Bubble[] = []
  bubbles.forEach(bubble => {
    let attempts = 0
    let x = 0
    let y = 0
    let overlapping = false

    do {
      x = Math.random() * (areaWidth - bubble.size) - (areaWidth / 2 - bubble.size / 2)
      y = Math.random() * (areaHeight - bubble.size) - (areaHeight / 2 - bubble.size / 2)

      overlapping = placed.some(b =>
        Math.hypot(b.x - x, b.y - y) < (b.size + bubble.size) / 2 + 10
      )
      attempts++
    } while (overlapping && attempts < maxAttempts)

    placed.push({ ...bubble, x, y })
  })
  return placed
}

export default function BubbleModel({ onSelect }: { onSelect?: (item: RSVP) => void }) {
  const [data, setData] = useState<Bubble[]>([])

  useEffect(() => {
    // FUNGSI BARU: Ambil data dari Supabase
    const fetchRSVP = async () => {
      const { data: rsvpData, error } = await supabase
        .from('rsvp')
        .select('*')
        .order('created_at', { ascending: false }) // Urutkan dari yang terbaru

      if (error) {
        console.error("Error fetching RSVP:", error.message)
        return
      }

      if (rsvpData) {
        const bubbles = rsvpData.map((item: RSVP) => {
          const preview = item.message ? item.message.split(" ")[0] : ""
          const size = Math.min(120, 70 + preview.length * 5) // Ukuran bubble sedikit disesuaikan
          return {
            ...item,
            x: 0,
            y: 0,
            size,
            floatDuration: 5 + Math.random() * 5 // Durasi melayang
          }
        })

        const positioned = generateNonOverlappingPositions(bubbles, 600, 400) // Area disesuaikan
        setData(positioned)
      }
    }

    fetchRSVP()
  }, [])

  function hexToRgba(hex: string, alpha: number) {
    if (!hex) return `rgba(251, 194, 235, ${alpha})`
    let r = 0, g = 0, b = 0
    if (hex.length === 7) {
      r = parseInt(hex.slice(1, 3), 16)
      g = parseInt(hex.slice(3, 5), 16)
      b = parseInt(hex.slice(5, 7), 16)
    }
    return `rgba(${r},${g},${b},${alpha})`
  }

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
      {data.map((item, i) => {
        const fromColor = hexToRgba(item.from_color, 0.8)
        const toColor = hexToRgba(item.to_color, 0.8)

        return (
          <motion.div
            key={i}
            drag
            dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }}
            className="flex flex-col items-center justify-center rounded-full text-white font-semibold cursor-pointer select-none shadow-xl p-2 absolute"
            style={{
              width: `${item.size}px`,
              height: `${item.size}px`,
              background: `linear-gradient(135deg, ${fromColor}, ${toColor})`,
              top: "50%",
              left: "50%",
            }}
            animate={{
              x: [item.x, item.x + 15, item.x - 15, item.x],
              y: [item.y, item.y - 15, item.y + 15, item.y]
            }}
            transition={{
              repeat: Infinity,
              duration: item.floatDuration,
              ease: "easeInOut"
            }}
            onClick={() => onSelect?.(item)}
          >
            <span className="text-center text-[10px] leading-tight px-1 line-clamp-1">{item.name}</span>
            <span className="text-[9px] opacity-80 italic mt-0.5">tap me</span>
          </motion.div>
        )
      })}
    </div>
  )
}