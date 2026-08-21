import type { ErrorRequestHandler, RequestHandler } from "express"

export const notFound: RequestHandler = (_request, response) => response.status(404).json({ success: false, error: "Route not found." })
export const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  console.error("Unhandled API error", error instanceof Error ? error.name : "unknown")
  if (error instanceof Error && error.message === "CORS_ORIGIN_NOT_ALLOWED") return response.status(403).json({ success: false, error: "This origin is not allowed." })
  if (error instanceof Error && ["EMAIL_PROVIDER_FAILED", "EMAIL_PROVIDER_TIMEOUT", "AI_PROVIDER_FAILED", "AI_PROVIDER_TIMEOUT"].includes(error.message)) return response.status(502).json({ success: false, error: "An upstream service is unavailable. Please try again later." })
  response.status(500).json({ success: false, error: "Unexpected server error." })
}
