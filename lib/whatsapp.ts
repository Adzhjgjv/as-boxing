const WHATSAPP_NUMBER = "447946497738"

export function createWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const bookingMessages = {
  general:
    "Hi Adam, I’d like to book a boxing session. Please let me know your availability.",
  firstSession:
    "Hi Adam, I’d like to book my first 1-to-1 boxing session. Please let me know your availability.",
  belvedereCoaching:
    "Hi Adam, I’m interested in 1-to-1 boxing coaching in Belvedere. I’d like to ask about a first session and your availability.",
  singleSession:
    "Hi Adam, I’d like to book a single 60-minute 1-to-1 boxing session (£50). Please let me know your availability.",
  fiveSessionBundle:
    "Hi Adam, I’d like to book the 5-session bundle (£200). Please let me know how to get started.",
} as const
