import { NextResponse } from "next/server"

const CONTACT_EMAIL = "as.boxingfitness@icloud.com"

type ContactPayload = {
  name?: string
  email?: string
  phone?: string
  message?: string
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const name = (payload.name ?? "").trim()
  const email = (payload.email ?? "").trim()
  const phone = (payload.phone ?? "").trim()
  const message = (payload.message ?? "").trim()

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please provide your name, email and a message." },
      { status: 400 }
    )
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY

  // Without an email provider key configured we still accept the enquiry and
  // log it, so the form never breaks for visitors while the key is being set up.
  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY is not set - enquiry logged instead of emailed:",
      { name, email, phone, message }
    )
    return NextResponse.json({ ok: true, delivered: false })
  }

  const fromAddress = process.env.CONTACT_FROM_EMAIL ?? "AS Boxing & Fitness <onboarding@resend.dev>"

  const html = `
    <h2>New enquiry from the AS Boxing &amp; Fitness website</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `New enquiry from ${name}`,
        html,
      }),
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error("[contact] Email provider error:", detail)
      return NextResponse.json(
        { error: "We could not send your message. Please try WhatsApp or email instead." },
        { status: 502 }
      )
    }
  } catch (error) {
    console.error("[contact] Unexpected error sending email:", error)
    return NextResponse.json(
      { error: "We could not send your message. Please try WhatsApp or email instead." },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true, delivered: true })
}
