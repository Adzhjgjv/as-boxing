import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const siteUrl = 'https://www.asboxingfitness.com'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: 'RGwJn_nuzhoUP61stizYxmHxLlEOorWBbO7PL_bXLlM',
  },
  title: {
default: "BEST Personal Trainer Bexley - if you're looking for Boxing Coaching near me, Boxing Training near me or Boxing Fitness & Conditioning near me - AS Boxing & Fitness is the place to be",
    template: '%s | AS Boxing & Fitness',
  },
  description:
    '1-to-1 boxing coaching in Belvedere, Bexley with an active competitive boxer and 3x London Champion. Beginner-friendly boxing, fitness and skills coaching. Book on WhatsApp.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'AS Boxing & Fitness',
  title: "BEST Personal Trainer Bexley - if you're looking for Boxing Coaching near me, Boxing Training near me or Boxing Fitness & Conditioning near me - AS Boxing & Fitness is the place to be",
    description:
      '1-to-1 boxing coaching with an active competitive boxer and 3x London Champion. Book a session in Belvedere, Bexley.',
    images: [
      {
        url: '/image.webp',
        width: 1146,
        height: 572,
        alt: 'Boxing in competition for AS Boxing & Fitness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "BEST Personal Trainer Bexley - if you're looking for Boxing Coaching near me, Boxing Training near me or Boxing Fitness & Conditioning near me - AS Boxing & Fitness is the place to be",
    description:
      '1-to-1 boxing coaching with an active competitive boxer and 3x London Champion.',
    images: ['/image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
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
