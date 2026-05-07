"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
    alt: "Boxing pad work session",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600&q=80",
    alt: "Boxing gloves close-up",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1517438322307-e67111335449?w=600&q=80",
    alt: "Boxing ring training",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=600&q=80",
    alt: "Gym environment",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    alt: "Fitness training",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    alt: "Strength conditioning",
    className: "col-span-2 row-span-1",
  },
]

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-[0.3em] text-sm">
            Training Gallery
          </span>
          <h2 
            className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mt-4 mb-6"
            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
          >
            See the Action
          </h2>
          <p className="text-muted-foreground text-lg">
            Get a glimpse of our training environment and what to expect from your sessions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden group ${image.className}`}
            >
              <div className="relative w-full h-full min-h-[200px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
