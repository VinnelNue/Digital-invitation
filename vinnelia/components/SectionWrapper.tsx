"use client"

import { motion } from "framer-motion"

export default function SectionWrapper({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{
        background:
          "linear-gradient(135deg, #f7f3ee, #efe7dc, #f7f3ee)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-playfair text-center mb-2">
          {title}
        </h1>

        {subtitle && (
          <p className="text-center text-neutral-500 mb-10">
            {subtitle}
          </p>
        )}

        <div className="
          bg-white/90
          rounded-3xl
          p-6 md:p-10
          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
        ">
          {children}
        </div>
      </motion.div>
    </main>
  )
}
