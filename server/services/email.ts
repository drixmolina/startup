import { Resend } from "resend"
import type { ContactSubmission } from "../types/api.js"

function safeProviderError(error: unknown) {
  if (error && typeof error === "object" && "message" in error) return String(error.message).slice(0, 200)
  return "unknown provider error"
}

export async function sendContactEmail(submission: ContactSubmission) {
  const apiKey = process.env.EMAIL_API_KEY
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL ?? process.env.CONTACT_EMAIL
  const sender = process.env.EMAIL_FROM ?? process.env.FROM_EMAIL
  if (!apiKey || !recipient || !sender) throw new Error("EMAIL_NOT_CONFIGURED")

  const resend = new Resend(apiKey)
  const rows = [
    ["Name", submission.name], ["Business", submission.businessName], ["Email", submission.email], ["Phone", submission.phone],
    ["Industry", submission.industry], ["Project Type", submission.projectType], ["Budget", submission.budget], ["Timeline", submission.timeline],
  ].filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`).join("\n")
  console.info("[EMAIL] Sending inquiry email")
  let result: Awaited<ReturnType<typeof resend.emails.send>>
  try {
    result = await Promise.race([
      resend.emails.send({
        from: sender,
        to: recipient,
        replyTo: submission.email,
        subject: `New Project Inquiry - ${submission.name}`,
        text: `${rows}\n\nProject Description:\n${submission.message}\n\nSubmitted: ${new Date().toISOString()}`,
      }),
      new Promise<never>((_, reject) => setTimeout(() => reject(new Error("EMAIL_PROVIDER_TIMEOUT")), 10_000)),
    ])
  } catch (error) {
    if (error instanceof Error && error.message === "EMAIL_PROVIDER_TIMEOUT") {
      console.error("[EMAIL] Provider rejected email: timeout")
      throw error
    }
    console.error("[EMAIL] Provider rejected email:", safeProviderError(error))
    throw new Error("EMAIL_PROVIDER_FAILED", { cause: error })
  }
  if (result.error) {
    console.error("[EMAIL] Provider rejected email:", safeProviderError(result.error))
    throw new Error("EMAIL_PROVIDER_FAILED", { cause: result.error })
  }
  console.info("[EMAIL] Provider accepted email")
  return result.data
}
