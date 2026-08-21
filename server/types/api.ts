export type ContactSubmission = {
  name: string
  businessName?: string
  email: string
  phone?: string
  industry?: string
  projectType?: string
  budget?: string
  timeline?: string
  message: string
}

export type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

export type ChatRequest = {
  agentId: string
  message: string
  history?: ChatMessage[]
}

export type ApiError = { success: false; error: string }
