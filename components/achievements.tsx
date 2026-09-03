"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Crown, Medal, Swords } from "lucide-react"
import Image from "next/image"

const achievements = [
  { icon: Crown, title: "3x London Champion" },
  { icon: Medal, title: "No. 2 in England" },
  { icon: Swords, title: "Active Competitor" },
]

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/achievements-bg.jpg"
          alt="Adam competing in the boxing ring"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <span className="text-primary font-semibold uppercase tracking-[0.24em] sm:tracking-[0.3em] text-xs sm:text-sm">
            Track Record
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight mt-4 mb-4"
            style={{ fontFamily: "var(--font-oswald), sans-serif" }}
          >
            Proven in the <span className="text-primary">Ring</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Coaching shaped by real competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border p-4 sm:p-6 text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <achievement.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3
                className="text-base sm:text-xl font-bold uppercase tracking-tight leading-tight"
                style={{ fontFamily: "var(--font-oswald), sans-serif" }}
              >
                {achievement.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
