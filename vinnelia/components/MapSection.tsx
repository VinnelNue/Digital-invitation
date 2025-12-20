"use client"

import dynamic from "next/dynamic"
import SectionWrapper from "@/components/SectionWrapper"

const Map = dynamic(() => import("@/components/Map"), { ssr: false })

export default function MapSection() {
  return (
    <section id="map">
      <SectionWrapper
        title="Lokasi Acara"
        subtitle="Gereja GKIN Getsemani"
      >
        <Map />

        <p className="mt-6 text-center text-sm text-neutral-600">
          Jl. Kolonel Sugiono 5 No.380A, Kota Malang
        </p>
      </SectionWrapper>
    </section>
  )
}
