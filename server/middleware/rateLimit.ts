import rateLimit from "express-rate-limit"

export const apiRateLimit = rateLimit({ windowMs: 15 * 60 * 1000, limit: 100, standardHeaders: "draft-8", legacyHeaders: false, message: { success: false, error: "Too many requests. Please try again later." } })
export const aiRateLimit = rateLimit({ windowMs: 15 * 60 * 1000, limit: 30, standardHeaders: "draft-8", legacyHeaders: false, message: { success: false, error: "Too many AI requests. Please try again later." } })
