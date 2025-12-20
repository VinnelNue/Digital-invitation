"use client"

import {
  Home,
  CalendarDays,
  Image as ImageIcon,
  MapPin,
  Mail,
  MessageCircle,
} from "lucide-react"

const menu = [
  { id: "home", label: "Home", icon: Home },
  { id: "invite", label: "Invite", icon: CalendarDays },
  { id: "gallery", label: "Gallery", icon: ImageIcon },
  { id: "map", label: "Map", icon: MapPin },
  { id: "rsvp", label: "RSVP", icon: Mail },
  { id: "bubble", label: "Bubble", icon: MessageCircle },
]

export default function FloatingMenu() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <div
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2 z-[999]
        bg-white/80 backdrop-blur-xl
        border border-neutral-200
        shadow-xl
        rounded-full px-6 py-3
        flex gap-4
      "
    >
      {menu.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="
            flex flex-col items-center justify-center
            text-neutral-700
            hover:text-white hover:bg-neutral-900
            rounded-full p-2 transition
          "
        >
          <Icon size={18} />
          <span className="text-[10px] mt-1">{label}</span>
        </button>
      ))}
    </div>
  )
}
