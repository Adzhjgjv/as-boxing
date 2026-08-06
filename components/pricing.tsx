"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Single Session",
    price: "£50",
    period: "per session",
    description: "A full 1-to-1 coaching session — perfect for trying it out or training on a flexible schedule.",
    features: [
      "60-minute 1-to-1 session",
      "Personalised coaching",
      "Technique & fitness assessment",
      "Flexible scheduling",
      "Suitable for all levels",
    ],
    popular: false,
    cta: "Book a Session",
  },
  {
    name: "5-Session Bundle",
    price: "£200",
    period: "5 sessions",
    description: "Commit to your training and save. The best way to build real skill and see results fast.",
    features: [
      "5 x 60-minute 1-to-1 sessions",
      "Structured training plan",
      "Progress tracking",
      "Priority booking",
      "WhatsApp support between sessions",
      "Save £50 vs single sessions",
    ],
    popular: true,
    cta: "Get the Bundle",
  },
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-[0.3em] text-sm">
            Investment
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mt-4 mb-6"
            style={{ fontFamily: "var(--font-oswald), sans-serif" }}
          >
            Training Packages
          </h2>
          <p className="text-muted-foreground text-lg">
            Straightforward pricing, no hidden extras. Pay per session or grab the bundle and save.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-card border p-8 flex flex-col ${
                plan.popular
                  ? "border-primary"
                  : "border-border hover:border-primary/50"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground whitespace-nowrap">
                  Best Value
                </div>
              )}

              <h3
                className="text-2xl font-bold uppercase tracking-tight mb-2"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                {plan.name}
              </h3>

              <div className="mb-4">
                <span
                  className="text-5xl font-bold text-primary"
                  style={{ fontFamily: "var(--font-oswald), sans-serif" }}
                >
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm ml-2">
                  {plan.period}
                </span>
              </div>

              <p className="text-muted-foreground text-sm mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`block w-full py-3 text-center font-semibold uppercase tracking-wider text-sm transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-muted-foreground text-sm mt-10"
        >
          Small group sessions also available — get in touch for group pricing.
        </motion.p>
      </div>
    </section>
  )
}
