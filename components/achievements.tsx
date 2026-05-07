"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Medal, Crown, Swords } from "lucide-react"
import Image from "next/image"

const achievements = [
  {
    icon: Crown,
    title: "3X London Champion",
    description: "Three-time London boxing champion across multiple competitions.",
  },
  {
    icon: Trophy,
    title: "King of The Ring Champion",
    description: "Crowned champion in the prestigious King of The Ring tournament.",
  },
  {
    icon: Medal,
    title: "No.2 in England, 2023",
    description: "Ranked second in England for the 2023 competitive season.",
  },
  {
    icon: Medal,
    title: "No.3 in Poland, 2024",
    description: "Achieved third place ranking in Poland for 2024.",
  },
  {
    icon: Swords,
    title: "Active Competitor",
    description: "Currently competing at the highest level of amateur boxing.",
  },
]

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517438322307-e67111335449?w=1920&q=80"
          alt="Boxing ring background"
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-[0.3em] text-sm">
            Track Record
          </span>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight mt-4 mb-6"
            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
          >
            Proven in the <span className="text-primary">Ring</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            These aren&apos;t just titles — they&apos;re proof of dedication, discipline, and the 
            relentless pursuit of excellence that we bring to every training session.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-card/50 backdrop-blur-sm border border-border p-8 hover:border-primary transition-all duration-300 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 
                    className="text-xl font-bold uppercase tracking-tight mb-2"
                    style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
                  >
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
