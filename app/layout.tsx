import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio — PM & Product Builder',
  description: 'PM le jour, vibe-coder la nuit. Projets IA construits sans écrire une ligne de code.',
  openGraph: {
    title: 'Portfolio — PM & Product Builder',
    description: 'Projets IA construits en vibe-coding.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
