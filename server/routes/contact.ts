import { Router } from "express"
import { z } from "zod"
import { sendContactEmail } from "../services/email.js"
import { saveContact } from "../db/database.js"
import { contactRateLimit } from "../middleware/rateLimit.js"

const contactSchema = z.object({ name: z.string().trim().min(2).max(120), businessName: z.string().trim().max(160).optional(), email: z.string().trim().email().max(200), phone: z.string().trim().max(50).optional(), industry: z.string().trim().max(100).optional(), projectType: z.string().trim().max(120).optional(), budget: z.string().trim().max(100).optional(), timeline: z.string().trim().max(100).optional(), message: z.string().trim().min(10).max(5000) }).strict()
export const contactRouter = Router()
contactRouter.post("/", contactRateLimit, async (request, response, next) => {
  console.info("[CONTACT] Request received")
  const parsed = contactSchema.safeParse(request.body)
  if (!parsed.success) return response.status(400).json({ success: false, error: "Please provide valid contact details and a project description." })
  console.info("[CONTACT] Validation successful")
  try {
    let contactId: string | null | undefined
    try {
      contactId = await saveContact(parsed.data)
      console.info("[CONTACT] Database operation successful")
    } catch (error) {
      throw new Error("DATABASE_FAILED", { cause: error })
    }
    if (process.env.NODE_ENV === "production" && !contactId) return response.status(503).json({ success: false, error: "Contact storage is not configured yet." })
    await sendContactEmail(parsed.data)
    return response.status(201).json({ success: true, message: "Your project inquiry has been received." })
  } catch (error) {
    if (error instanceof Error && error.message === "EMAIL_NOT_CONFIGURED") return response.status(503).json({ success: false, error: "Contact delivery is not configured yet." })
    if (error instanceof Error && error.message === "DATABASE_FAILED") return response.status(503).json({ success: false, error: "The inquiry could not be saved. Please try again later." })
    next(error)
  }
})
