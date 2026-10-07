import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check, ChevronRight, MapPin, MessageCircle } from 'lucide-react'

import { Footer } from '@/components/footer'
import { MobileBooking } from '@/components/mobile-booking'
import { Navbar } from '@/components/navbar'
import { seoPageBySlug, seoPages } from '@/lib/seo-pages'
import { bookingMessages, createWhatsAppLink } from '@/lib/whatsapp'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = seoPageBySlug[slug]

  if (!page) {
    return {}
  }

  const url = `https://www.asboxingfitness.com/${page.slug}`

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      type: 'article',
      url,
      title: page.title,
      description: page.description,
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
      title: page.title,
      description: page.description,
      images: ['/image.png'],
    },
  }
}

function toLabel(slug: string) {
  return slug
    .split('-')
    .map((word) => (word === 'faq' ? 'FAQ' : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(' ')
}

export default async function SeoPage({ params }: PageProps) {
  const { slug } = await params
  const page = seoPageBySlug[slug]

  if (!page) {
    notFound()
  }

  const pageUrl = `https://www.asboxingfitness.com/${page.slug}`
  const bookingLink = createWhatsAppLink(bookingMessages.firstSession)
  const relatedPages = page.related.map((relatedSlug) => seoPageBySlug[relatedSlug]).filter(Boolean)
  const contentSchema =
    page.kind === 'service'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${pageUrl}#service`,
          name: page.h1,
          description: page.description,
          serviceType: 'Private boxing coaching',
          url: pageUrl,
          provider: { '@id': 'https://www.asboxingfitness.com/#business' },
          areaServed: [
            { '@type': 'City', name: 'Belvedere' },
            { '@type': 'AdministrativeArea', name: 'Bexley' },
          ],
          offers: {
            '@type': 'Offer',
            price: '50',
            priceCurrency: 'GBP',
            description: '60-minute one-to-one private boxing coaching session',
            url: bookingLink,
          },
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': `${pageUrl}#article`,
          headline: page.h1,
          description: page.description,
          mainEntityOfPage: pageUrl,
          datePublished: '2026-10-07',
          dateModified: '2026-10-07',
          author: { '@type': 'Person', name: 'Adam Sipika' },
          publisher: { '@id': 'https://www.asboxingfitness.com/#business' },
          image: 'https://www.asboxingfitness.com/image.png',
        }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.asboxingfitness.com/' },
      { '@type': 'ListItem', position: 2, name: 'Boxing guides', item: 'https://www.asboxingfitness.com/boxing-guides' },
      { '@type': 'ListItem', position: 3, name: page.h1, item: pageUrl },
    ],
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <main className="min-h-screen pb-16 lg:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {page.kind === 'faq' ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /> : null}
      <Navbar />

      <section className="relative overflow-hidden border-b border-border pt-36 sm:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(173,22,37,0.27),transparent_43%),linear-gradient(to_bottom,rgba(0,0,0,0.12),rgba(0,0,0,0.74))]" />
        <div className="relative mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <Link href="/boxing-guides" className="transition-colors hover:text-primary">Boxing guides</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-primary">{page.category}</span>
          </nav>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Belvedere, Bexley
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>
            {page.h1}
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">{page.standfirst}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Ask about a first session
            </a>
            <Link href="/boxing-coaching-prices" className="inline-flex min-h-14 items-center justify-center border border-border px-6 py-4 text-sm font-semibold uppercase tracking-wider transition-colors hover:border-primary hover:text-primary">
              View private coaching prices
            </Link>
          </div>
        </div>
      </section>

      <article className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:px-8">
          <div className="space-y-12">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{page.category}</p>
                <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight sm:text-4xl" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>{section.heading}</h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">{section.body}</p>
              </section>
            ))}

            <section className="border-y border-border bg-secondary/20 py-10 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Key points</p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {page.takeaways.map((takeaway) => (
                  <li key={takeaway} className="flex gap-3 leading-7 text-muted-foreground">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="faq">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Questions answered</p>
              <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight sm:text-4xl" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>Before you book</h2>
              <div className="mt-7 divide-y divide-border border-y border-border">
                {page.faqs.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="cursor-pointer list-none pr-8 text-lg font-semibold marker:hidden">
                      <span className="relative block after:absolute after:right-0 after:top-1/2 after:text-primary after:content-['+'] group-open:after:content-['−']">{faq.question}</span>
                    </summary>
                    <p className="max-w-3xl pt-4 leading-7 text-muted-foreground">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className="border border-border bg-card p-6 lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Private coaching</p>
            <h2 className="mt-3 text-3xl font-bold uppercase leading-none" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>Train with Adam</h2>
            <p className="mt-4 leading-7 text-muted-foreground">1-to-1 boxing coaching at 66 Gilbert Rd, Belvedere. Beginner-friendly, appointment-based and available in English and Polish.</p>
            <dl className="mt-6 space-y-3 border-y border-border py-5 text-sm">
              <div className="flex items-start justify-between gap-4"><dt className="text-muted-foreground">Single session</dt><dd className="font-semibold">£50 / 60 min</dd></div>
              <div className="flex items-start justify-between gap-4"><dt className="text-muted-foreground">Five sessions</dt><dd className="font-semibold">£200</dd></div>
            </dl>
            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Message on WhatsApp
            </a>
          </aside>
        </div>
      </article>

      {relatedPages.length > 0 ? (
        <section className="border-t border-border bg-secondary/20 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Continue learning</p>
            <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight sm:text-4xl" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>Related boxing guides</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedPages.map((relatedPage) => (
                <Link key={relatedPage.slug} href={`/${relatedPage.slug}`} className="group border border-border bg-card p-6 transition-colors hover:border-primary">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{relatedPage.category}</p>
                  <h3 className="mt-3 text-xl font-bold uppercase leading-tight" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>{relatedPage.h1}</h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-primary">Read guide <ChevronRight className="h-4 w-4" aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Footer />
      <MobileBooking />
    </main>
  )
}
