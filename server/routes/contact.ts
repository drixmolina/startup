import { Router } from "express"
import { z } from "zod"
import { sendContactEmail } from "../services/email.js"
import { saveContact } from "../db/database.js"

const contactSchema = z.object({ name: z.string().trim().min(2).max(120), businessName: z.string().trim().max(160).optional(), email: z.string().trim().email().max(200), phone: z.string().trim().max(50).optional(), industry: z.string().trim().max(100).optional(), projectType: z.string().trim().max(120).optional(), budget: z.string().trim().max(100).optional(), timeline: z.string().trim().max(100).optional(), message: z.string().trim().min(10).max(5000) }).strict()
export const contactRouter = Router()
contactRouter.post("/", async (request, response, next) => {
  const parsed = contactSchema.safeParse(request.body)
  if (!parsed.success) return response.status(400).json({ success: false, error: "Please provide valid contact details and a project description." })
  try {
    const contactId = await saveContact(parsed.data)
    if (process.env.NODE_ENV === "production" && !contactId) return response.status(503).json({ success: false, error: "Contact storage is not configured yet." })
    await sendContactEmail(parsed.data)
    return response.status(201).json({ success: true, message: "Your project inquiry has been received." })
  } catch (error) {
    if (error instanceof Error && error.message === "EMAIL_NOT_CONFIGURED") return response.status(503).json({ success: false, error: "Contact delivery is not configured yet." })
    next(error)
  }
})
