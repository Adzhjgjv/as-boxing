"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "James T.",
    role: "Client for 8 months",
    content: "Training with AS Boxing has completely transformed my fitness. I've lost 15kg and feel stronger than ever. The coaching is world-class.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    role: "Beginner Boxer",
    content: "I was nervous about starting boxing, but the sessions are so welcoming. I've gained so much confidence and my technique has improved massively.",
    rating: 5,
  },
  {
    name: "Tomasz K.",
    role: "Polish-Speaking Client",
    content: "Świetny trener! Being able to train in Polish made learning so much easier. The technical knowledge is incredible - you can tell he's a real competitor.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Fitness Enthusiast",
    content: "The intensity of these sessions is unlike anything I've experienced. You're not just training - you're learning real boxing from someone who lives it.",
    rating: 5,
  },
  {
    name: "Emma L.",
    role: "Weight Loss Journey",
    content: "I never thought I'd enjoy exercise until I tried boxing. Down 20lbs and counting. The discipline and structure have changed my whole lifestyle.",
    rating: 5,
  },
  {
    name: "Michael B.",
    role: "Small Group Training",
    content: "The group sessions are brilliant - competitive but supportive. Training with friends has kept us all accountable and motivated.",
    rating: 5,
  },
]

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
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="border-t border-border pt-6">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
