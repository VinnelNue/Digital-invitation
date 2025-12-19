"use client"

import dynamic from "next/dynamic"
import SectionWrapper from "@/components/SectionWrapper"
import FloatingMenu from "@/components/FloatingMenu"

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
})

export default function MapPage() {
  return (
    <>
      <SectionWrapper
        title="Lokasi Acara"
        subtitle="Gereja GKIN Getsemani"
      >
        <Map />

        <div className="mt-6 text-center text-sm text-neutral-600">
          Jl. Kolonel Sugiono 5 No.380A, Mergosono, Kec. Kedungkandang, Kota Malang, Jawa Timur 65148
        </div>
      </SectionWrapper>

      <FloatingMenu />
    </>
  )
}
