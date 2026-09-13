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
  title: {
    default: 'Boxing Coach in Belvedere & Bexley | AS Boxing & Fitness',
    template: '%s | AS Boxing & Fitness',
  },
  description:
    '1-to-1 boxing coaching in Belvedere, Bexley with active boxer and 3x London Champion Adam Sipika. Beginner-friendly boxing, fitness and skills coaching. Book on WhatsApp.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'AS Boxing & Fitness',
    title: 'Boxing Coach in Belvedere & Bexley | AS Boxing & Fitness',
    description:
      '1-to-1 boxing coaching with active boxer and 3x London Champion Adam Sipika. Book a session in Belvedere, Bexley.',
    images: [
      {
        url: '/image.png',
        width: 1146,
        height: 572,
        alt: 'Adam Sipika boxing in competition for AS Boxing & Fitness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boxing Coach in Belvedere & Bexley | AS Boxing & Fitness',
    description:
      '1-to-1 boxing coaching with active boxer and 3x London Champion Adam Sipika.',
    images: ['/image.png'],
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
