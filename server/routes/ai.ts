import { Router } from "express"
import { z } from "zod"
import { agents, getAgent } from "../agents/agents.js"
import { createAgentResponse } from "../services/openai.js"
import { aiRateLimit } from "../middleware/rateLimit.js"

const chatSchema = z.object({ agentId: z.string().trim().min(1).max(60), message: z.string().trim().min(1).max(4000), history: z.array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().max(4000) })).max(12).optional() }).strict()
export const aiRouter = Router()
aiRouter.get("/agents", (_request, response) => response.json({ success: true, agents: agents.map(({ id, name, description }) => ({ id, name, description })) }))
aiRouter.post("/chat", aiRateLimit, async (request, response, next) => {
  const parsed = chatSchema.safeParse(request.body)
  if (!parsed.success) return response.status(400).json({ success: false, error: "Please provide a valid agent and message." })
  const agent = getAgent(parsed.data.agentId)
  if (!agent) return response.status(400).json({ success: false, error: "Unknown AI agent." })
  try { const message = await createAgentResponse(agent, parsed.data.message, parsed.data.history); return response.json({ success: true, message }) } catch (error) { if (error instanceof Error && error.message === "AI_NOT_CONFIGURED") return response.status(503).json({ success: false, error: "The AI service is not configured yet." }); next(error) }
})
