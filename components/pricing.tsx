"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Single Session",
    price: "£45",
    period: "per session",
    description: "Perfect for trying out our training or occasional sessions.",
    features: [
      "60-minute session",
      "Personalised coaching",
      "Technique assessment",
      "Fitness evaluation",
      "Flexible scheduling",
    ],
    popular: false,
  },
  {
    name: "Weekly Package",
    price: "£150",
    period: "per week",
    description: "Commit to 4 sessions per week for maximum results.",
    features: [
      "4 sessions per week",
      "Structured training plan",
      "Progress tracking",
      "Nutrition guidance",
      "Priority booking",
      "WhatsApp support",
    ],
    popular: true,
  },
  {
    name: "Monthly Plan",
    price: "£499",
    period: "per month",
    description: "Our most comprehensive package for serious athletes.",
    features: [
      "Unlimited sessions",
      "Custom training programme",
      "Weekly progress reviews",
      "Video analysis",
      "Nutrition plan",
      "24/7 support",
      "Competition prep available",
    ],
    popular: false,
  },
  {
    name: "Small Group",
    price: "£25",
    period: "per person",
    description: "Train with friends in groups of 2-4 people.",
    features: [
      "60-minute session",
      "2-4 participants",
      "Group pad work",
      "Fitness circuits",
      "Team motivation",
    ],
    popular: false,
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
            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
          >
            Training Packages
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the package that fits your goals and commitment level. 
            All packages include professional coaching from a competitive boxer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-card border p-8 ${
                plan.popular 
                  ? "border-primary" 
                  : "border-border hover:border-primary/50"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  Most Popular
                </div>
              )}

              <h3 
                className="text-xl font-bold uppercase tracking-tight mb-2"
                style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
              >
                {plan.name}
              </h3>

              <div className="mb-4">
                <span 
                  className="text-4xl font-bold text-primary"
                  style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                >
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm ml-2">{plan.period}</span>
              </div>

              <p className="text-muted-foreground text-sm mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
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
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
