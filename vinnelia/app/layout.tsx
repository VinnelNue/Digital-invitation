import "./globals.css"

export const metadata = {
  title: "Vinnelia – Wedding Invitation",
  description: "Undangan Pernikahan Digital",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
      
    </html>
  )
}
