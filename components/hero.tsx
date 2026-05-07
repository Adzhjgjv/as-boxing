"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1920&q=80"
          alt="Boxing training in action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary font-semibold uppercase tracking-[0.3em] text-sm mb-6">
              Belvedere, Bexley, London
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-none mb-6"
            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
          >
            Train Like a
            <span className="block text-primary">Champion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Boxing personal training in Belvedere, Bexley, London — led by an actively competing boxer, 
            <span className="text-foreground font-medium"> 3X London Champion</span> and 
            <span className="text-foreground font-medium"> King of The Ring Champion</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 text-center inline-flex items-center justify-center gap-2 group"
            >
              Book Your Session
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="#services"
              className="border-2 border-foreground/20 text-foreground px-8 py-4 text-lg font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300 text-center"
            >
              Start Training Today
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            {[
              { value: "3X", label: "London Champion" },
              { value: "#2", label: "in England 2023" },
              { value: "#3", label: "in Poland 2024" },
              { value: "2", label: "Languages" },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-primary" style={{ fontFamily: 'var(--font-oswald), sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-primary w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  )
}
