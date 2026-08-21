import { Router } from "express"
import { checkDatabase } from "../db/database.js"

export const healthRouter = Router()
healthRouter.get("/", async (_request, response) => {
	try {
		const database = await checkDatabase()
		const production = process.env.NODE_ENV === "production"
		const ok = database === "ok" || (!production && database === "not_configured")
		response.status(ok ? 200 : 503).json({ ok, service: "dm-digital-api", environment: process.env.NODE_ENV ?? "development", database })
	} catch {
		response.status(503).json({ ok: false, service: "dm-digital-api", error: "Database is unavailable." })
	}
})
