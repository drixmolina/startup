import type { AgentConfig } from "../agents/agents.js"
import type { ChatMessage } from "../types/api.js"

export async function createAgentResponse(agent: AgentConfig, message: string, history: ChatMessage[] = []) {
  const apiKey = process.env.AI_API_KEY
  const model = process.env.AI_MODEL
  const url = process.env.AI_API_URL
  if (!apiKey || !model || !url) throw new Error("AI_NOT_CONFIGURED")
  console.info("[AI] Sending chat request")
  let providerResponse: Response
  try {
    providerResponse = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ model, messages: [{ role: "system", content: agent.systemPrompt }, ...history.slice(-12), { role: "user", content: message }], temperature: 0.4, max_tokens: 700 }),
      signal: AbortSignal.timeout(15_000),
    })
  } catch (error) {
    if (error instanceof Error && error.name === "TimeoutError") throw new Error("AI_PROVIDER_TIMEOUT")
    throw new Error("AI_PROVIDER_FAILED", { cause: error })
  }
  if (!providerResponse.ok) throw new Error("AI_PROVIDER_FAILED")
  const payload = await providerResponse.json() as { choices?: Array<{ message?: { content?: string } }> }
  const response = payload.choices?.[0]?.message?.content?.trim()
  if (!response) throw new Error("AI_EMPTY_RESPONSE")
  console.info("[AI] Provider returned a response")
  return response
}
