import { MessageCircle } from "lucide-react"
import { bookingMessages, createWhatsAppLink } from "@/lib/whatsapp"

export function MobileBooking() {
  return (
    <a
      href={createWhatsAppLink(bookingMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-0 bottom-0 z-[60] flex min-h-16 items-center justify-center gap-2 bg-primary px-4 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[0_-8px_24px_rgba(0,0,0,0.35)] lg:hidden"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      Book on WhatsApp
    </a>
  )
}
