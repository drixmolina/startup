import { Resend } from "resend"
import type { ContactSubmission } from "../types/api.js"

export async function sendContactEmail(submission: ContactSubmission) {
  const apiKey = process.env.EMAIL_API_KEY
  const recipient = process.env.CONTACT_EMAIL
  const sender = process.env.FROM_EMAIL
  if (!apiKey || !recipient || !sender) throw new Error("EMAIL_NOT_CONFIGURED")

  const resend = new Resend(apiKey)
  const rows = [
    ["Name", submission.name], ["Business", submission.businessName], ["Email", submission.email], ["Phone", submission.phone],
    ["Industry", submission.industry], ["Project Type", submission.projectType], ["Budget", submission.budget], ["Timeline", submission.timeline],
  ].filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`).join("\n")
  const result = await resend.emails.send({
    from: sender,
    to: recipient,
    replyTo: submission.email,
    subject: "New DM Digital Solutions Project Inquiry",
    text: `${rows}\n\nProject Description:\n${submission.message}`,
  })
  if (result.error) throw new Error("EMAIL_PROVIDER_FAILED")
  return result.data
}
