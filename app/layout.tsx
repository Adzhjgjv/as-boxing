import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald'
})

export const metadata: Metadata = {
  title: 'AS Boxing & Fitness | Train Like a Champion | Belvedere, Bexley, London',
  description: 'Professional boxing personal training in Belvedere, Bexley, London. Led by a 3X London Champion and King of The Ring Champion. 1-to-1 coaching, fitness, weight loss, and strength conditioning. Coaching available in English and Polish.',
  keywords: ['boxing training', 'personal trainer', 'Belvedere', 'Bexley', 'London', 'fitness', 'boxing coach', 'weight loss', 'strength conditioning', 'Polish boxing coach'],
  openGraph: {
    title: 'AS Boxing & Fitness | Train Like a Champion',
    description: 'Professional boxing personal training in Belvedere, Bexley, London. Led by a 3X London Champion.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
