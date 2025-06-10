import type { ReactNode } from "react"
import "@/app/globals.css"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "shadcn/ui Component Showcase",
  description: "A comprehensive showcase of all shadcn/ui components",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
