import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check, MapPin, MessageCircle, ShieldCheck, Target } from 'lucide-react'

import { Footer } from '@/components/footer'
import { MobileBooking } from '@/components/mobile-booking'
import { Navbar } from '@/components/navbar'
import { bookingMessages, createWhatsAppLink } from '@/lib/whatsapp'

const pageUrl = 'https://www.asboxingfitness.com/boxing-coach-belvedere'

export const metadata: Metadata = {
  title: 'Boxing Coach in Belvedere | 1-to-1 Training',
  description:
    'Private 1-to-1 boxing coaching in Belvedere, Bexley with active boxer and 3x London Champion Adam Sipika. Beginner-friendly 60-minute sessions from £50. Book on WhatsApp.',
  alternates: {
    canonical: '/boxing-coach-belvedere',
  },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Boxing Coach in Belvedere | AS Boxing & Fitness',
    description:
      '1-to-1 boxing coaching in Belvedere for beginners, fitness and technical development. Train with active competitive boxer Adam Sipika.',
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
    title: 'Boxing Coach in Belvedere | AS Boxing & Fitness',
    description:
      '1-to-1 boxing coaching in Belvedere for beginners, fitness and technical development.',
    images: ['/image.png'],
  },
}

const coachingBenefits = [
  'A full 60-minute one-to-one session built around your level and goal',
  'Technique, pads, movement and boxing fitness — not a generic circuit class',
  'Coaching from an active competitive boxer with 30+ fights',
  'Beginner-friendly, with no pressure to spar',
]

const faqs = [
  {
    question: 'Do I need boxing experience?',
    answer:
      'No. Sessions are suitable for complete beginners as well as people who already train. Your first session starts at your level and focuses on the skills, fitness or confidence you want to build.',
  },
  {
    question: 'How much is a private boxing session?',
    answer:
      'A 60-minute one-to-one session is £50. A five-session bundle is £200, saving £50 compared with booking five individual sessions.',
  },
  {
    question: 'Where does the coaching take place?',
    answer:
      'Training is based at 66 Gilbert Rd, Belvedere, DA17 5DA. This page is for private coaching at the Belvedere base, rather than a group boxing class.',
  },
  {
    question: 'Is this suitable if I am coming from Bexley?',
    answer:
      'Yes. The Belvedere training base is available for clients from across Bexley and the surrounding area. Message Adam on WhatsApp before booking if you would like to check whether the location and session time work for you.',
  },
  {
    question: 'What should I bring to my first session?',
    answer:
      'Wear comfortable training clothes and trainers, and bring water. If you have gloves or hand wraps, bring them along; if not, ask on WhatsApp before your session and Adam will confirm what you need.',
  },
]

const localCoachingSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: '1-to-1 Boxing Coaching in Belvedere',
      serviceType: 'Private boxing coaching',
      description:
        'Private 1-to-1 boxing coaching for beginners and all levels in Belvedere, Bexley. Sessions are led by active competitive boxer Adam Sipika.',
      url: pageUrl,
      provider: {
        '@id': 'https://www.asboxingfitness.com/#business',
      },
      areaServed: [
        { '@type': 'City', name: 'Belvedere' },
        { '@type': 'AdministrativeArea', name: 'Bexley' },
      ],
      offers: [
        {
          '@type': 'Offer',
          name: '60-minute private boxing coaching session',
          price: '50',
          priceCurrency: 'GBP',
          availability: 'https://schema.org/InStock',
          url: createWhatsAppLink(bookingMessages.belvedereCoaching),
        },
        {
          '@type': 'Offer',
          name: 'Five-session private boxing coaching bundle',
          price: '200',
          priceCurrency: 'GBP',
          availability: 'https://schema.org/InStock',
          url: createWhatsAppLink(bookingMessages.fiveSessionBundle),
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
}

export default function BoxingCoachBelvederePage() {
  const bookFirstSession = createWhatsAppLink(bookingMessages.belvedereCoaching)

  return (
    <main className="min-h-screen pb-16 lg:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localCoachingSchema) }}
      />
      <Navbar />

      <section className="relative overflow-hidden border-b border-border pt-36 sm:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(173,22,37,0.28),transparent_42%),linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.72))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 sm:pb-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8 lg:pb-28">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Belvedere, Bexley
            </p>
            <h1
              className="max-w-2xl text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
            >
              Boxing coaching that is built around <span className="text-primary">you</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Private 1-to-1 boxing coaching in Belvedere for beginners, fitness goals and technical development. Train with Adam Sipika — an active competitive boxer and 3x London Champion.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={bookFirstSession}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Ask about your first session
              </a>
              <a
                href="#prices"
                className="inline-flex min-h-14 items-center justify-center border border-border px-6 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                View private coaching prices
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">60-minute 1-to-1 session · £50 · Appointment-based availability</p>
          </div>

          <div className="relative mx-auto w-full max-w-xl overflow-hidden border border-border bg-card shadow-2xl">
            <Image
              src="/image.png"
              alt="Adam Sipika boxing in competition"
              width={1146}
              height={572}
              className="aspect-[1.55/1] h-full w-full object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Coached by a competitor</p>
              <p className="mt-2 text-lg font-semibold text-white">3x London Champion · No. 2 in England 2023 · 30+ fights</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Private boxing training</p>
            <h2
              className="mt-4 text-4xl font-bold uppercase tracking-tight sm:text-5xl"
              style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
            >
              Not a generic class. A session designed for your goal.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-7 text-muted-foreground sm:text-lg">
            <p>
              AS Boxing &amp; Fitness is for people who want focused coaching, whether you are putting on gloves for the first time, building boxing fitness or improving your technique. Every session is one-to-one, so the pace and content are shaped around you.
            </p>
            <p>
              The training base is in Belvedere, with clients travelling from Bexley and the surrounding area. The offer is deliberately different from a scheduled group boxing club: private coaching, transparent pricing and booking directly with Adam on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">What to expect</p>
            <h2
              className="mt-4 text-4xl font-bold uppercase tracking-tight sm:text-5xl"
              style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
            >
              Personal coaching from the first bell.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {coachingBenefits.map((benefit) => (
              <div key={benefit} className="flex gap-4 border border-border bg-card p-5 sm:p-6">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="leading-7 text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Private coaching prices</p>
            <h2
              className="mt-4 text-4xl font-bold uppercase tracking-tight sm:text-5xl"
              style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
            >
              Straightforward pricing. No membership required.
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="border border-border bg-card p-7 sm:p-8">
              <h3 className="text-2xl font-bold uppercase" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>
                Single session
              </h3>
              <p className="mt-3 text-5xl font-bold text-primary" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>£50</p>
              <p className="mt-1 text-sm text-muted-foreground">60-minute 1-to-1 coaching session</p>
              <p className="mt-6 leading-7 text-muted-foreground">Ideal if you want to try private boxing coaching or keep your training flexible.</p>
              <a
                href={bookFirstSession}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book a £50 session
              </a>
            </div>
            <div className="border border-primary bg-card p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Best value</p>
              <h3 className="mt-2 text-2xl font-bold uppercase" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>
                5-session bundle
              </h3>
              <p className="mt-3 text-5xl font-bold text-primary" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>£200</p>
              <p className="mt-1 text-sm text-muted-foreground">Five 60-minute 1-to-1 coaching sessions</p>
              <p className="mt-6 leading-7 text-muted-foreground">A structured option for building consistent technique, fitness and confidence. You save £50 versus five individual sessions.</p>
              <a
                href={createWhatsAppLink(bookingMessages.fiveSessionBundle)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center border border-primary px-5 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Ask about the bundle
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Belvedere base, Bexley catchment</p>
            <h2
              className="mt-4 text-4xl font-bold uppercase tracking-tight sm:text-5xl"
              style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
            >
              Private boxing coaching based in Belvedere.
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
              Sessions take place at 66 Gilbert Rd, Belvedere, DA17 5DA. If you are searching for boxing near Bexley, this is a private training option based in Belvedere — not a claim of a separate Bexley venue or a scheduled group class.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=66+Gilbert+Rd%2C+Belvedere%2C+DA17+5DA&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3 text-sm font-semibold uppercase tracking-wider transition-colors hover:border-primary hover:text-primary"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Get directions
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3 text-sm font-semibold uppercase tracking-wider transition-colors hover:border-primary hover:text-primary"
              >
                Contact details
              </Link>
            </div>
          </div>
          <div className="border border-border bg-card p-6 sm:p-8">
            <div className="flex gap-4">
              <Target className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-bold uppercase" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>Who this is for</h3>
                <p className="mt-2 leading-7 text-muted-foreground">Adults looking for individual attention, a flexible appointment and a session tailored to a real goal — from learning the basics to building ring skills and boxing fitness.</p>
              </div>
            </div>
            <div className="mt-6 flex gap-4 border-t border-border pt-6">
              <ShieldCheck className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-bold uppercase" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>Beginner-friendly by design</h3>
                <p className="mt-2 leading-7 text-muted-foreground">No previous experience is needed. You can ask questions before you book and start at a pace that is right for you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Frequently asked questions</p>
            <h2
              className="mt-4 text-4xl font-bold uppercase tracking-tight sm:text-5xl"
              style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
            >
              Before your first session
            </h2>
          </div>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold marker:hidden">
                  <span className="relative block after:absolute after:right-0 after:top-1/2 after:text-primary after:content-['+'] group-open:after:content-['−']">{faq.question}</span>
                </summary>
                <p className="max-w-3xl pt-4 leading-7 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={bookFirstSession}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Message Adam on WhatsApp
            </a>
            <p className="mt-4 text-sm text-muted-foreground">Ask about availability, your goal or what to bring before you book.</p>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBooking />
    </main>
  )
}
