import type { Metadata } from 'next'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Achievements } from '@/components/achievements'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { Gallery } from '@/components/gallery'
import { Contact } from '@/components/contact'
import { Faq } from '@/components/faq'
import { Footer } from '@/components/footer'
import { MobileBooking } from '@/components/mobile-booking'
import { homepageFaqs } from '@/lib/homepage-faq'
import { businessPhoneDisplay, professionalServiceSchema } from '@/lib/local-seo'

const homepageTitle =
  "BEST Personal Trainer Bexley - if you're looking for Boxing Coaching near me, Boxing Training near me or Boxing Fitness & Conditioning near me - AS Boxing & Fitness is the place to be"

export const metadata: Metadata = {
  title: {
    absolute: homepageTitle,
  },
  openGraph: {
    title: homepageTitle,
  },
  twitter: {
    title: homepageTitle,
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  ...professionalServiceSchema(),
  description:
    '1-to-1 boxing coaching in Belvedere, Bexley with an active competitive boxer and 3x London Champion. Beginner-friendly boxing, fitness and skills coaching.',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.4915113,
    longitude: 0.1459151,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: businessPhoneDisplay,
    contactType: 'bookings',
    availableLanguage: ['English', 'Polish'],
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Boxing coaching services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: '1-to-1 boxing coaching',
        price: '50',
        priceCurrency: 'GBP',
        url: 'https://wa.me/447946497738?text=Hi%20Adam%2C%20I%E2%80%99d%20like%20to%20book%20a%20single%2060-minute%201-to-1%20boxing%20session%20%28%C2%A350%29.%20Please%20let%20me%20know%20your%20availability.',
      },
      {
        '@type': 'Offer',
        name: '2-to-1 boxing coaching',
        price: '70',
        priceCurrency: 'GBP',
        url: 'https://wa.me/447946497738?text=Hi%20Adam%2C%20I%E2%80%99d%20like%20to%20book%20a%202-to-1%20boxing%20session%20%28%C2%A370%20per%20hour%29.%20Please%20let%20me%20know%20your%20availability.',
      },
      {
        '@type': 'Offer',
        name: 'Five-session boxing coaching bundle',
        price: '200',
        priceCurrency: 'GBP',
        url: 'https://wa.me/447946497738?text=Hi%20Adam%2C%20I%E2%80%99d%20like%20to%20book%20the%205-session%20bundle%20%28%C2%A3200%29.%20Please%20let%20me%20know%20how%20to%20get%20started.',
      },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homepageFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function Home() {
  return (
    <main className="min-h-screen pb-16 lg:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <link rel="preload" as="image" href="/image.avif" type="image/avif" fetchPriority="high" />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Achievements />
      <Testimonials />
      <Pricing />
      <Gallery />
      <Faq />
      <Contact />
      <Footer />
      <MobileBooking />
    </main>
  )
}
