"use client"

import GalleryPreview from "@/components/GalleryPreview"
import FloatingMenu from "@/components/FloatingMenu"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] relative">
      
      <GalleryPreview />

      <FloatingMenu />
    </main>
  )
}
