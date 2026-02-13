import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Inter } from 'next/font/google'

import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })
const _playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Trip Margadarshak | Cinematic Trekking Experiences',
  description: 'Curated trekking expeditions across India with cinematic storytelling and premium guides.',
  generator: 'v0.app',
  openGraph: {
    title: 'Trip Margadarshak | Cinematic Trekking Experiences',
    description: 'Curated trekking expeditions across India with cinematic storytelling and premium guides.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_playfairDisplay.variable} ${_inter.variable}`}>
      <body className="font-sans antialiased bg-white text-slate-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
