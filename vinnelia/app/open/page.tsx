"use client"

import { useRef, useState } from "react"
import FloatingMenu from "@/components/FloatingMenu"
import Mempelai from "@/components/Mempelai"
import InviteSection from "@/components/InviteSection"
import GalleryPreview from "@/components/GalleryPreview"
import MapSection from "@/components/MapSection"
import RsvpSection from "@/components/RSVPSection"
import BubbleSection from "@/components/BubbleSection"
import ClosingSection from "@/components/ClosingSection"
import { Play, Pause } from "lucide-react"

export default function OpenPage() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleAudio = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch(() => console.log("Audio diblokir"))
      setIsPlaying(true)
    }
  }

  return (
    <main className="bg-neutral-50 text-neutral-800 relative">

      {/* Audio */}
      <audio ref={audioRef} src="/audio/river_flow_in_you.mp3" loop />

      {/* Tombol Play/Pause */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-24 right-6 z-50 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg flex items-center justify-center"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

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
              28.12.2025
          </p>
        </div>
      </section>

      {/* mempelai profil */}
      <section id="User" className="bg-white py-24 px-6">
        <Mempelai />
      </section>

      {/* INVITE */}
      <section id="invite" className="bg-white py-24 px-6">
        <InviteSection />
      </section>

      {/* MAP */}
      <section id="map" className="relative py-24 px-6">
        <img
          src="/images/gallery/2.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
          alt=""
        />
        <div className="relative">
          <MapSection />
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-gradient-to-b from-neutral-100 to-neutral-200 py-24 px-6">
        <GalleryPreview />
      </section>

      {/* RSVP */}
      <section id="rsvp" className="bg-white py-24 px-6">
        <RsvpSection />
      </section>

      {/* BUBBLE */}
      <section id="bubble" className="bg-gradient-to-b from-purple-50 to-pink-50 py-24 px-6">
        <BubbleSection />
      </section>

      {/* CLOSING */}
      <section id="close">
        <ClosingSection />
      </section>

      <FloatingMenu />
    </main>
  )
}
