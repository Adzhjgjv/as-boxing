"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Shield, BadgeCheck, Dumbbell, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Real Boxing Knowledge",
    description: "Learn the latest boxing techniques from an actively competing boxer.",
  },
  {
    icon: BadgeCheck,
    title: "Fully Qualified Coach",
    description: "Fully certified boxing and fitness coach, focused on effective training for all levels.",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Weight Loss",
    description: "Transform your body with high-intensity boxing workouts designed to burn fat and build muscle.",
  },
  {
    icon: Users,
    title: "Beginner Friendly",
    description: "No experience needed. Every session is tailored to your skill level and fitness goals.",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <video
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover"
>
  <source src="/hero-video.mp4.mp4" type="video/mp4" />
</video>
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 sm:p-8">
              <div className="text-4xl sm:text-5xl font-bold text-primary-foreground" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>
                30+
              </div>
              <div className="text-sm uppercase tracking-wider text-primary-foreground/80">
                Fights Experience
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-semibold uppercase tracking-[0.3em] text-sm">
              About 
            </span>
            <h2 
              className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mt-4 mb-6"
              style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
            >
              AS Boxing & Fitness
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
               Train with an actively competing elite amateur boxer and learn the techniques, tactics, and conditioning used in today’s competitive fight game. 
               Each session is tailored to you and your specific goals.
              </p>
              <p className="text-foreground font-medium">
                Sessions available in Belvedere Boxing Club, Bexley. 
                Coaching delivered in both English and Polish.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
