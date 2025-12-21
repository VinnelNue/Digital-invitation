"use client";

import { useSearchParams } from "next/navigation";

export default function GuestName() {
  const searchParams = useSearchParams();
  const rawName = searchParams.get("to");
  const guestName = rawName ? decodeURIComponent(rawName) : "Tamu Undangan";

  return (
    <div className="text-center mb-8">
      <p className="font-poppins italic text-sm text-neutral-200 mb-1 tracking-wide text-shadow-md">
        Kepada yang terhormat
      </p>
      <h2 className="font-poppins italic text-2xl md:text-3xl text-white tracking-wide text-shadow-md">
        {guestName}
      </h2>
    </div>  
  );
}
