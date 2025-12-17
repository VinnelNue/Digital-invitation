"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

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

// Fungsi untuk generate posisi acak tanpa tabrakan
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
        Math.hypot(b.x - x, b.y - y) < (b.size + bubble.size) / 2 + 10 // jarak minimal
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
    fetch("https://vinnelia.great-site.net/backend/rsvp/rsvp_list.php")
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          const bubbles = res.data.map((item: RSVP) => {
            const preview = item.message.split(" ").slice(0, 1).join(" ")
            const size = Math.min(120, 50 + preview.length * 6)
            return {
              ...item,
              x: 0,
              y: 0,
              size,
              floatDuration: 4 + Math.random() * 4
            }
          })

          const positioned = generateNonOverlappingPositions(bubbles, 800, 600) // area lebar x tinggi
          setData(positioned)
        }
      })
      .catch(err => console.log(err))
  }, [])

  function hexToRgba(hex: string, alpha: number) {
    let r = 0, g = 0, b = 0
    if (hex.length === 7) {
      r = parseInt(hex.slice(1, 3), 16)
      g = parseInt(hex.slice(3, 5), 16)
      b = parseInt(hex.slice(5, 7), 16)
    } else if (hex.length === 4) {
      r = parseInt(hex[1]+hex[1], 16)
      g = parseInt(hex[2]+hex[2], 16)
      b = parseInt(hex[3]+hex[3], 16)
    }
    return `rgba(${r},${g},${b},${alpha})`
  }

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
      {data.map((item, i) => {
        const fromColor = hexToRgba(item.from_color || "#fbc2eb", 0.8)
        const toColor = hexToRgba(item.to_color || "#a6c1ee", 0.8)

        return (
          <motion.div
            key={i}
            drag
            dragConstraints={{ top: -300, bottom: 300, left: -300, right: 300 }}
            dragElastic={0.2}
            className="flex flex-col items-center justify-center rounded-full text-white font-semibold cursor-pointer select-none shadow-xl p-2 absolute"
            style={{
              width: `${item.size}px`,
              height: `${item.size}px`,
              background: `linear-gradient(135deg, ${fromColor}, ${toColor})`,
              top: "50%",
              left: "50%",
            }}
            animate={{
              x: [
                item.x,
                item.x + Math.random() * 50 - 25,
                item.x + Math.random() * 50 - 25,
                item.x
              ],
              y: [
                item.y,
                item.y + Math.random() * 50 - 25,
                item.y + Math.random() * 50 - 25,
                item.y
              ]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: item.floatDuration,
              ease: "easeInOut",
              delay: i * 0.1
            }}
            onClick={() => onSelect?.(item)}
            title={item.message}
          >
            <span className="text-center text-sm">{item.name}</span>
            <span className="text-xs mt-1">
              {item.message.split(" ").slice(0, 1).join(" ")}
              {item.message.length > 1 ? "…" : ""}
            </span>
          </motion.div>
        )
      })}
    </div>
  )
}
