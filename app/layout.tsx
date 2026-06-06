import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
