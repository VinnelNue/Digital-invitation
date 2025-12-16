"use client"

import { Home, CalendarDays, Image, Mail } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

const menus = [
  { icon: Home, path: "/open" },
  { icon: CalendarDays, path: "/open/invitation" },
  { icon: Image, path: "/open/gallery" },
  { icon: Mail, path: "/open/rsvp" },
]

export default function FloatingMenu() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="
      fixed bottom-6 left-1/2 -translate-x-1/2 z-50
      bg-white/70 backdrop-blur-xl
      border border-neutral-200
      shadow-[0_10px_30px_rgba(0,0,0,0.15)]
      rounded-full px-6 py-3
      flex gap-6
    ">
      {menus.map(({ icon: Icon, path }) => {
        const active = pathname === path
        return (
          <button
            key={path}
            onClick={() => router.push(path)}
            className={`
              p-2 rounded-full transition
              ${active
                ? "bg-neutral-900 text-white"
                : "text-neutral-600 hover:text-neutral-900"}
            `}
          >
            <Icon size={18} />
          </button>
        )
      })}
    </div>
  )
}
