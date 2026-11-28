"use client"

import Link from "next/link"
import { Instagram, MessageCircle, Phone, Mail } from "lucide-react"
import { PictureImage } from "@/components/picture-image"
import { businessAddressLine, businessName, businessPhoneDisplay, businessPhoneTel } from "@/lib/local-seo"

const footerLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/boxing-personal-trainer-bexley", label: "Personal Trainer" },
  { href: "/boxing-coach-belvedere", label: "Boxing Coach" },
  { href: "/boxing-guides", label: "Boxing Guides" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
]

const socialLinks = [
  { href: "https://instagram.com/as.boxingfitness", icon: Instagram, label: "Instagram" },
  { href: "https://wa.me/447946497738", icon: MessageCircle, label: "WhatsApp" },
  { href: "tel:+447946497738", icon: Phone, label: "Phone" },
  { href: "mailto:as.boxingfitness@icloud.com", icon: Mail, label: "Email" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-block">
              <PictureImage
                webpSrc="/logo.webp"
                avifSrc="/logo.avif"
                alt="AS Boxing & Fitness"
                width={768}
                height={512}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm mt-2">
              1-to-1 boxing coaching in Belvedere, Bexley. Coached by an active competitor.
            </p>
            <address className="not-italic text-muted-foreground text-sm mt-4">
              <p>
                <span className="font-semibold text-foreground">{businessName}</span>
                {", "}
                {businessAddressLine}
                {", "}
                <a href={`tel:${businessPhoneTel}`} className="hover:text-primary">
                  {businessPhoneDisplay}
                </a>
              </p>
            </address>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AS Boxing & Fitness. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Coaching available in <span className="text-primary">English</span> & <span className="text-primary">Polish</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
