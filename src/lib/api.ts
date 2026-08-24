const configuredApiBase = (import.meta.env.VITE_API_URL ?? "").trim().replace(/\/$/, "")
const apiBase = configuredApiBase || (import.meta.env.DEV ? "http://localhost:8787" : "")

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const url = `${apiBase}${path}`
  const headers = new Headers(options?.headers)
  if (options?.body && !headers.has("Content-Type")) headers.set("Content-Type", "application/json")
  let response: Response
  try {
    response = await fetch(url, { ...options, headers })
  } catch {
    throw new Error("Unable to connect to the server. Please make sure the API server is running and try again.")
  }
  const payload = await response.json().catch(() => ({})) as T & { error?: string }
  if (!response.ok) {
    if (response.status >= 500) throw new Error("Something went wrong on our server. Please try again later.")
    throw new Error(payload.error ?? "The request could not be completed.")
  }
  return payload
}

export type ContactPayload = { name: string; businessName?: string; email: string; phone?: string; industry?: string; projectType?: string; budget?: string; timeline?: string; message: string }
export type ChatHistoryItem = { role: "user" | "assistant"; content: string }
export const api = {
  health: () => request<{ ok: boolean }>("/api/health"),
  submitContact: (payload: ContactPayload) => request<{ success: true; message: string }>("/api/contact", { method: "POST", body: JSON.stringify(payload) }),
  chat: (payload: { agentId: string; message: string; history?: ChatHistoryItem[] }) => request<{ success: true; message: string }>("/api/ai/chat", { method: "POST", body: JSON.stringify(payload) }),
}
