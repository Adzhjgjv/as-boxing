"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const galleryImages = [
  {
    src: "/gallery-1.jpg",
    alt: "Adam landing a punch in competition",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/gallery-2.jpg",
    alt: "Championship belt win with the coaching team",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/gallery-3.jpg",
    alt: "Adam's hand raised after a win",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/gallery-4.jpg",
    alt: "Adam and a clubmate with gold medals and their coach",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/gallery-5.jpg",
    alt: "Adam in a competitive bout",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/gallery-6.jpg",
    alt: "Adam's hand raised after an international bout",
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
            In the Ring
          </span>
          <h2 
            className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mt-4 mb-6"
            style={{ fontFamily: 'var(--font-oswald), sans-serif' }}
          >
            The Journey So Far
          </h2>
          <p className="text-muted-foreground text-lg">
            From local shows to international competitions — a look at some of the moments along the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[280px] gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden group ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
