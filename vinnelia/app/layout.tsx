import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// Font default Next.js
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Font aesthetic untuk undangan
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinnelia — Wedding Invitation",
  description: "Digital Wedding Invitation by Kevin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${playfair.variable}
          ${inter.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
