"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Target, 
  Heart, 
  Flame, 
  Brain, 
  Clock, 
  Dumbbell, 
  Footprints, 
  Trophy 
} from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Learn Real Boxing Skills",
    description: "Master authentic boxing techniques used by competitive fighters.",
  },
  {
    icon: Heart,
    title: "Improve Cardio",
    description: "Boost cardiovascular health with high-intensity boxing workouts.",
  },
  {
    icon: Flame,
    title: "Burn Fat",
    description: "Torch calories and achieve your weight loss goals faster.",
  },
  {
    icon: Brain,
    title: "Build Confidence",
    description: "Develop mental strength and self-belief through disciplined training.",
  },
  {
    icon: Clock,
    title: "Increase Discipline",
    description: "Learn the discipline that champions use to reach the top.",
  },
  {
    icon: Dumbbell,
    title: "Develop Strength",
    description: "Build functional power and athletic performance.",
  },
  {
    icon: Footprints,
    title: "Improve Footwork",
    description: "Master movement, balance, and ring positioning.",
  },
  {
    icon: Trophy,
    title: "Train with a Competitor",
    description: "Learn from someone who actively applies these skills in competition.",
  },
]

export function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="benefits" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-[0.3em] text-sm">
            Why Train With Us
          </span>
          <h2 
            className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mt-4 mb-6"
            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
          >
            The Benefits
          </h2>
          <p className="text-muted-foreground text-lg">
            Boxing training transforms more than just your body — it builds mental resilience, 
            confidence, and skills that carry over into every area of life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 
                className="text-lg font-bold uppercase tracking-tight mb-2"
                style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
              >
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
