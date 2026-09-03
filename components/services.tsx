"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Flame, GraduationCap, Target, Users } from "lucide-react"
import { bookingMessages, createWhatsAppLink } from "@/lib/whatsapp"

const services = [
  { icon: Target, title: "1-to-1 Coaching" },
  { icon: GraduationCap, title: "Beginner Friendly" },
  { icon: Flame, title: "Boxing Fitness" },
  { icon: Users, title: "Train With a Friend" },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-[0.24em] sm:tracking-[0.3em] text-xs sm:text-sm">
            What I Offer
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mt-4 mb-4"
            style={{ fontFamily: "var(--font-oswald), sans-serif" }}
          >
            Training That Fits <span className="text-primary">You</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Personal boxing coaching for every level and every goal.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-card border border-border p-5 sm:p-6 text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3
                className="text-lg sm:text-xl font-bold uppercase tracking-tight"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-center mt-10 sm:mt-12"
        >
          <a
            href={createWhatsAppLink(bookingMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-base sm:text-lg font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 group"
          >
            Book a Session
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
