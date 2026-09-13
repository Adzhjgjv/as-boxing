import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Achievements } from '@/components/achievements'
import { Pricing } from '@/components/pricing'
import { Gallery } from '@/components/gallery'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { MobileBooking } from '@/components/mobile-booking'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.asboxingfitness.com/#business',
  name: 'AS Boxing & Fitness',
  url: 'https://www.asboxingfitness.com/',
  image: 'https://www.asboxingfitness.com/image.png',
  logo: 'https://www.asboxingfitness.com/logo.png',
  description:
    '1-to-1 boxing coaching in Belvedere, Bexley with active boxer and 3x London Champion Adam Sipika. Beginner-friendly boxing, fitness and skills coaching.',
  telephone: '+447946497738',
  email: 'as.boxingfitness@icloud.com',
  priceRange: '££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '66 Gilbert Rd',
    addressLocality: 'Belvedere',
    addressRegion: 'Bexley',
    postalCode: 'DA17 5DA',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.4915113,
    longitude: 0.1459151,
  },
  areaServed: [
    {
      '@type': 'AdministrativeArea',
      name: 'Bexley',
    },
    {
      '@type': 'City',
      name: 'London',
    },
  ],
  sameAs: ['https://www.instagram.com/as.boxingfitness/'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+447946497738',
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
        name: 'Five-session boxing coaching bundle',
        price: '200',
        priceCurrency: 'GBP',
        url: 'https://wa.me/447946497738?text=Hi%20Adam%2C%20I%E2%80%99d%20like%20to%20book%20the%205-session%20bundle%20%28%C2%A3200%29.%20Please%20let%20me%20know%20how%20to%20get%20started.',
      },
    ],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen pb-16 lg:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Achievements />
      <Pricing />
      <Gallery />
      <Contact />
      <Footer />
      <MobileBooking />
    </main>
  )
}
