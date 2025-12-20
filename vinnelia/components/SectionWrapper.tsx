"use client"

import { ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  title?: string
  subtitle?: string
}

export default function SectionWrapper({
  children,
  title,
  subtitle,
}: SectionWrapperProps) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        {title && (
          <h2 className="text-4xl md:text-5xl font-serif mb-3">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-neutral-600 text-sm md:text-base">
            {subtitle}
          </p>
        )}
      </div>

      {children}
    </section>
  )
}
