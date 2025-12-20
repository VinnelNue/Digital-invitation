"use client"

import FloatingMenu from "@/components/FloatingMenu"
import InviteSection from "@/components/InviteSection"
import GalleryPreview from "@/components/GalleryPreview"
import MapSection from "@/components/MapSection"
import RsvpSection from "@/components/RSVPSection"
import BubbleSection from "@/components/BubbleSection"

export default function OpenPage() {
  return (
    <main className="bg-neutral-50 text-neutral-800">

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-center px-6"
      >
        <img
          src="/images/background/3.jpg"
          className="absolute inset-0 w-full h-full object-scale-down object-center"
          alt="cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-white max-w-xl">
          <p className="text-xs tracking-[0.4em] mb-6 opacity-80">
            WEDDING INVITATION
          </p>

          <h1 className="font-playfair text-4xl md:text-6xl leading-tight mb-6">
            Kevin Immanuel
            <div className="my-2">&</div>
            Theresia Nathalia Biantoro
          </h1>

          <p className="text-sm opacity-80">
            Minggu · 28 Desember 2025
          </p>
        </div>
      </section>

      {/* INVITE */}
      <section id="invite" className="bg-white py-24 px-6">
        <InviteSection />
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="bg-gradient-to-b from-neutral-100 to-neutral-200 py-24 px-6"
      >
        <GalleryPreview />
      </section>

      {/* MAP */}
      <section
        id="map"
        className="relative py-24 px-6"
      >
        <img
          src="/images/gallery/2.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
          alt=""
        />
        <div className="relative">
          <MapSection />
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="bg-white py-24 px-6">
        <RsvpSection />
      </section>

      {/* BUBBLE */}
      <section
        id="bubble"
        className="bg-gradient-to-b from-purple-50 to-pink-50 py-24 px-6"
      >
        <BubbleSection />
        
      </section>

      <FloatingMenu />
    </main>
  )
}
