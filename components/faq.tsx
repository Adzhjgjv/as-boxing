import { homepageFaqs } from '@/lib/homepage-faq'

export function Faq() {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold uppercase tracking-[0.3em] text-sm">
            Before you book
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mt-4"
            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
          >
            Common questions
          </h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {homepageFaqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold marker:hidden">
                <span className="relative block after:absolute after:right-0 after:top-1/2 after:text-primary after:content-['+'] group-open:after:content-['−']">
                  {faq.question}
                </span>
              </summary>
              <p className="max-w-3xl pt-4 leading-7 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
