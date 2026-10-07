import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, MapPin, MessageCircle } from 'lucide-react'

import { Footer } from '@/components/footer'
import { MobileBooking } from '@/components/mobile-booking'
import { Navbar } from '@/components/navbar'
import { seoPages } from '@/lib/seo-pages'
import { bookingMessages, createWhatsAppLink } from '@/lib/whatsapp'

const pageUrl = 'https://www.asboxingfitness.com/boxing-guides'

export const metadata: Metadata = {
  title: 'Boxing Guides, Coaching Advice & Private Training',
  description: 'Beginner boxing guides, private coaching information, technique advice and practical training answers from AS Boxing & Fitness in Belvedere, Bexley.',
  alternates: { canonical: '/boxing-guides' },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Boxing Guides & Private Coaching | AS Boxing & Fitness',
    description: 'Clear, beginner-friendly boxing guides and private coaching information from Belvedere, Bexley.',
    images: [{ url: '/image.png', width: 1146, height: 572, alt: 'Adam Sipika boxing in competition' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boxing Guides & Private Coaching | AS Boxing & Fitness',
    description: 'Clear, beginner-friendly boxing guides and private coaching information from Belvedere, Bexley.',
    images: ['/image.png'],
  },
}

const categoryOrder = ['Private coaching', 'Beginner guide', 'Boxing fitness', 'Technique guide', 'Practical guide'] as const

export default function BoxingGuidesPage() {
  const bookingLink = createWhatsAppLink(bookingMessages.firstSession)
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#collection`,
    name: 'AS Boxing & Fitness boxing guides',
    description: 'Beginner-friendly boxing guides and private coaching information from AS Boxing & Fitness in Belvedere, Bexley.',
    url: pageUrl,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: seoPages.map((page, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://www.asboxingfitness.com/${page.slug}`,
        name: page.title,
      })),
    },
  }

  return (
    <main className="min-h-screen pb-16 lg:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Navbar />

      <section className="relative overflow-hidden border-b border-border pt-36 sm:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(173,22,37,0.27),transparent_43%),linear-gradient(to_bottom,rgba(0,0,0,0.12),rgba(0,0,0,0.74))]" />
        <div className="relative mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Boxing training library
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>
            Learn the basics. <span className="text-primary">Train with purpose.</span>
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Clear guides for people considering private boxing coaching in Belvedere and Bexley. Explore beginner questions, technique fundamentals, boxing fitness and practical booking information—then ask Adam about a session when you are ready.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Ask about a first session
            </a>
            <Link href="/boxing-coach-belvedere" className="inline-flex min-h-14 items-center justify-center border border-border px-6 py-4 text-sm font-semibold uppercase tracking-wider transition-colors hover:border-primary hover:text-primary">
              Private boxing coaching
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Private coaching, local facts</p>
            <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight sm:text-4xl" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>Built for useful questions, not keyword filler</h2>
            <p className="mt-5 leading-8 text-muted-foreground sm:text-lg">These guides are written around the questions that matter before a private session: where training happens, what a beginner needs, how coaching works, what it costs and how the foundations fit together. AS Boxing &amp; Fitness is based at 66 Gilbert Rd, Belvedere, DA17 5DA; it is a private one-to-one coaching service, not a group boxing club.</p>
          </div>

          <div className="mt-14 space-y-16">
            {categoryOrder.map((category) => {
              const pages = seoPages.filter((page) => page.category === category)
              return (
                <section key={category} id={category.toLowerCase().replaceAll(' ', '-')}>
                  <div className="flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Browse by topic</p>
                      <h2 className="mt-2 text-3xl font-bold uppercase tracking-tight sm:text-4xl" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>{category}</h2>
                    </div>
                    <p className="text-sm text-muted-foreground">{pages.length} {pages.length === 1 ? 'guide' : 'guides'}</p>
                  </div>
                  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {pages.map((page) => (
                      <Link key={page.slug} href={`/${page.slug}`} className="group flex min-h-64 flex-col border border-border bg-card p-6 transition-colors hover:border-primary">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{page.kind === 'service' ? 'Private coaching' : page.category}</p>
                        <h3 className="mt-3 text-2xl font-bold uppercase leading-tight" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>{page.h1}</h3>
                        <p className="mt-4 line-clamp-3 leading-7 text-muted-foreground">{page.description}</p>
                        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-primary">Read guide <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                      </Link>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/20 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary"><MapPin className="h-4 w-4" aria-hidden="true" /> Belvedere, Bexley</p>
            <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight sm:text-4xl" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>Ready to try private boxing coaching?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">Tell Adam your experience level, goal and likely availability. A standard 60-minute private session is £50; the five-session bundle is £200.</p>
          </div>
          <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Message on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <MobileBooking />
    </main>
  )
}
