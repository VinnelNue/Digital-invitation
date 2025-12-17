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
  const fetchRSVP = async () => {
    const { data: rsvpData, error } = await supabase
      .from('rsvp')
      .select('*')
      .order('created_at', { ascending: false })

    if (rsvpData) {
      const bubbles = rsvpData.map((item: RSVP) => {
        const preview = item.message ? item.message.split(" ")[0] : ""
        const size = Math.min(100, 60 + preview.length * 4) // Ukuran dikecilkan sedikit buat HP
        return {
          ...item,
          x: 0,
          y: 0,
          size,
          floatDuration: 5 + Math.random() * 5
        }
      })

      // PERBAIKAN DI SINI:
      // Gunakan window.innerWidth agar areanya pas dengan layar HP
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth - 100 : 300
      const screenHeight = 400 
      
      const positioned = generateNonOverlappingPositions(bubbles, screenWidth, screenHeight)
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

// ... kode atas tetap sama ...

  return (
    <div className="relative w-full h-[calc(100vh-8rem)] overflow-hidden">
      {data.map((item, i) => {
        const fromColor = hexToRgba(item.from_color, 0.8)
        const toColor = hexToRgba(item.to_color, 0.8)

        return (
          <motion.div
            key={i}
            drag
            // Perkecil constraints buat HP supaya nggak gampang hilang ditarik keluar
            dragConstraints={{ top: -250, bottom: 250, left: -150, right: 150 }}
            className="flex flex-col items-center justify-center rounded-full text-white font-semibold cursor-pointer select-none shadow-xl p-2 absolute"
            style={{
              width: `${item.size}px`,
              height: `${item.size}px`,
              background: `linear-gradient(135deg, ${fromColor}, ${toColor})`,
              // Trik agar benar-benar di tengah layar:
              top: "50%",
              left: "50%",
              marginLeft: `-${item.size / 2}px`, // Mundur setengah lebar bubble
              marginTop: `-${item.size / 2}px`,  // Mundur setengah tinggi bubble
            }}
            animate={{
              // Gerakan melayang halus
              x: [item.x, item.x + 10, item.x - 10, item.x],
              y: [item.y, item.y - 10, item.y + 10, item.y]
            }}
            transition={{
              repeat: Infinity,
              duration: item.floatDuration,
              ease: "easeInOut",
              delay: i * 0.2 // Biar geraknya nggak barengan semua (lebih alami)
            }}
            onClick={() => onSelect?.(item)}
          >
            <span className="text-center text-[10px] leading-tight px-1 line-clamp-2">
              {item.name}
            </span>
            <span className="text-[8px] opacity-70 italic mt-0.5">tap</span>
          </motion.div>
        )
      })}
    </div>
  )
}