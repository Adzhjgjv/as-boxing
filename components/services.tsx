"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Target, 
  GraduationCap, 
  Hand, 
  Flame, 
  Scale, 
  Dumbbell, 
  Users, 
  Languages 
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Target,
    title: "1-to-1 Boxing Coaching",
    description: "Personalised one-on-one training sessions tailored to your goals, skill level, and fitness.",
  },
  {
    icon: GraduationCap,
    title: "Beginner Boxing Lessons",
    description: "Learn the fundamentals of boxing in a supportive environment. No experience required.",
  },
  {
    icon: Hand,
    title: "Pad Work Sessions",
    description: "Intensive pad work drills to sharpen your combinations, timing, and accuracy.",
  },
  {
    icon: Flame,
    title: "Boxing Fitness",
    description: "High-energy boxing workouts designed to improve cardiovascular health and endurance.",
  },
  {
    icon: Scale,
    title: "Weight Loss Training",
    description: "Burn calories and shed weight with boxing-based HIIT and conditioning programmes.",
  },
  {
    icon: Dumbbell,
    title: "Strength & Conditioning",
    description: "Build functional strength, power, and athletic performance for boxing and life.",
  },
  {
    icon: Users,
    title: "Small Group Training",
    description: "Train with friends or colleagues in motivating small group sessions.",
  },
  {
    icon: Languages,
    title: "Polish-Speaking Coaching",
    description: "Professional boxing coaching available in Polish for native speakers.",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-[0.3em] text-sm">
            What We Offer
          </span>
          <h2 
            className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mt-4 mb-6"
            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
          >
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From complete beginners to experienced boxers, we offer comprehensive training 
            programmes designed to help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 
                className="text-xl font-bold uppercase tracking-tight mb-3"
                style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
              >
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 group"
          >
            Book a Session
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
