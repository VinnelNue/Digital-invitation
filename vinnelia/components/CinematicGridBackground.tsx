"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const TOTAL_IMAGES = 24
const INTERVAL = 6000 // ganti tiap 6 detik

function randomImage() {
  return `/images/gallery/${Math.floor(Math.random() * TOTAL_IMAGES) + 1}.jpg`
}

export default function CinematicGridBackground() {
  const [images, setImages] = useState([
    randomImage(),
    randomImage(),
    randomImage(),
  ])

  useEffect(() => {
    const timer = setInterval(() => {
      setImages([
        randomImage(),
        randomImage(),
        randomImage(),
      ])
    }, INTERVAL)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3">
      {images.map((img, i) => (
        <div key={i} className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={img}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
