"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const googleReviewsUrl = "https://www.google.com/maps?cid=5091563003234848869"

const testimonials = [
  {
    name: "George B.",
    content:
      "As a complete beginner, I was keen to focus on learning the fundamentals and getting my technique right from the start, and that's exactly what we've been working on. He's a great coach, patient, knowledgeable and really takes the time to explain things properly. … I've been so pleased with the first couple of sessions that I've already booked another 10 hours with him.",
    rating: 5,
  },
  {
    name: "Akhilesh T.",
    content:
      "Adam is an absolutely amazing coach who genuinely cares about his students and is always committed to getting the very best out of them. … He doesn't just teach boxing techniques; he focuses on discipline, fitness, confidence, footwork, movement, technique and mental strength.",
    rating: 5,
  },
  {
    name: "Suzy C.",
    content:
      "I have been having personal training boxing sessions with Adam, from AS Boxing & Fitness, he is very professional in his manner and very patient when you get it wrong a hundred times. He teaches from his own boxing experience and training, spotting every little mistake. I can totally recommend him.",
    rating: 5,
  },
  {
    name: "Marcin K.",
    content:
      "Very good workout👍 this was my first ever boxing session and I'd definitely recommend. It wasn't just a fitness workout, Adam taught me proper technique and how to throw a punch with the correct form.",
    rating: 5,
  },
  {
    name: "Euan B.",
    content:
      "Great boxing session with Adam. He really put me through my paces whilst correcting my technique throughout. Proper workout and would definitely recommend.",
    rating: 5,
  },
  {
    name: "Sarvina S.",
    content:
      "Took my little brother for a one-to-one boxing sessions and we had a really good experience. The instructor was friendly, patient and really good with him. He made the session fun while still teaching him proper technique and keeping him engaged the whole time.",
    rating: 5,
  },
]

function initialsFromName(name: string) {
  return name
    .split(/\s+/)
    .filter((part) => part.length > 0)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")
}

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-[0.3em] text-sm">
            Client Reviews
          </span>
          <h2 
            className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mt-4 mb-6"
            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
          >
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real results from real people who committed to their training journey.
          </p>
          <p className="mt-4 text-lg">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener"
              className="text-primary font-medium hover:underline"
            >
              5.0 from 15 Google reviews
            </a>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-6" aria-label="5 stars">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="border-t border-border pt-6 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center bg-secondary text-sm font-semibold text-foreground"
                  aria-hidden="true"
                >
                  {initialsFromName(testimonial.name)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">Google review</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
