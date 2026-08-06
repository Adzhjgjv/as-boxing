import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Achievements } from "@/components/achievements"
import { Pricing } from "@/components/pricing"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Achievements />
      <Pricing />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
