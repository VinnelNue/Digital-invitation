"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type RSVP = {
  name: string
  message: string
  from_color: string
  to_color: string
}

export default function BubbleModel({ onSelect }: { onSelect?: (item: RSVP) => void }) {
  const [data, setData] = useState<RSVP[]>([])

  useEffect(() => {
    fetch("http://localhost/Digital-invitation/vinnelia/backend/rsvp/rsvp_list.php")
      .then(res => res.json())
      .then(res => {
        if (res.success) setData(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  function hexToRgba(hex: string, alpha: number) {
    let r = 0, g = 0, b = 0;
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
    <div className="relative w-full h-[500px] flex flex-wrap justify-center items-center gap-6 p-4 overflow-hidden">
      {data.map((item, i) => {
        const preview = item.message.split(" ").slice(0, 1).join(" ") // kata pertama
        const size = Math.min(120, 50 + preview.length * 6)

        const fromColor = hexToRgba(item.from_color || "#fbc2eb", 0.8)
        const toColor = hexToRgba(item.to_color || "#a6c1ee", 0.8)

        return (
          <motion.div
            key={i}
            className="flex flex-col items-center justify-center rounded-full text-white font-semibold cursor-pointer select-none shadow-xl p-2"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              background: `linear-gradient(135deg, ${fromColor}, ${toColor})`
            }}
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
            onClick={() => onSelect?.(item)}
            title={item.message} // hover full message
          >
            <span className="text-center text-sm">{item.name}</span>
            <span className="text-xs mt-1">
              {preview}{item.message.length > preview.length ? "…" : ""}
            </span>
          </motion.div>
        )
      })}
    </div>
  )
}
