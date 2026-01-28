import React from "react"
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: '--font-poppins' });
const dmSans = { variable: '--font-dm-sans' }; // Placeholder for dmSans
const dmSerif = { variable: '--font-dm-serif' }; // Placeholder for dmSerif

export const metadata: Metadata = {
  title: 'Zyvora - Find True Power in Your Data',
  description: 'AI-powered analytics solutions built to bring clarity, speed, and impact to every decision.',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
