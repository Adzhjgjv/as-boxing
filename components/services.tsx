"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Flame, GraduationCap, Target, Users } from "lucide-react"
import Link from "next/link"
import { bookingMessages, createWhatsAppLink } from "@/lib/whatsapp"

const services = [
  {
    icon: Target,
    title: "1-to-1 Boxing Training",
    href: "/boxing-personal-trainer-bexley",
    linkText: "a boxing personal trainer for Bexley clients",
  },
  {
    icon: GraduationCap,
    title: "Boxing for Beginners",
    href: "/boxing-for-beginners-belvedere",
    linkText: "boxing for beginners",
  },
  {
    icon: Flame,
    title: "Boxing Fitness & Conditioning",
    href: "/boxing-fitness-belvedere",
    linkText: "boxing fitness coaching",
  },
  {
    icon: Users,
    title: "2-to-1 Boxing Training",
    href: "/private-boxing-training-bexley",
    linkText: "private boxing training in Bexley",
    price: "£70 per hour",
  },
]

const areaLinks = [
  { href: "/boxing-coach-bexley", label: "boxing coaching in Bexley" },
  { href: "/boxing-coach-belvedere", label: "boxing coaching in Belvedere" },
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
            Personal Training
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
              className="group relative bg-card border border-border p-5 sm:p-6 text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h2
                className="text-lg sm:text-xl font-bold uppercase tracking-tight"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                {service.title}
              </h2>
              {"price" in service && service.price ? (
                <p className="mt-2 text-sm font-semibold text-primary">{service.price}</p>
              ) : null}
              <Link
                href={service.href}
                className="mt-3 inline-block text-sm font-semibold leading-snug text-muted-foreground transition-colors group-hover:text-primary after:absolute after:inset-0"
              >
                {service.linkText}
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-muted-foreground sm:mt-10">
          Small group sessions are also available, and sessions for juniors are available too.
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-6 text-muted-foreground">
          Areas we serve:{" "}
          {areaLinks.map((link, index) => (
            <span key={link.href}>
              {index > 0 ? " · " : null}
              <Link href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </Link>
            </span>
          ))}
        </p>

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
