import "dotenv/config"
import cors from "cors"
import express from "express"
import helmet from "helmet"
import { errorHandler, notFound } from "./middleware/errorHandler.js"
import { apiRateLimit } from "./middleware/rateLimit.js"
import { aiRouter } from "./routes/ai.js"
import { contactRouter } from "./routes/contact.js"
import { healthRouter } from "./routes/health.js"

const app = express()
const port = Number(process.env.PORT ?? 8787)
const configuredOrigins = (process.env.CORS_ORIGINS ?? process.env.CORS_ORIGIN ?? "")
	.split(/[;,]/)
	.map((origin) => origin.trim().replace(/\/$/, ""))
	.filter(Boolean)
const allowedOrigins = configuredOrigins.length > 0 ? configuredOrigins : ["http://localhost:8443", "http://127.0.0.1:8443", "http://localhost:5173"]
const corsOptions: cors.CorsOptions = {
	origin: (origin, callback) => {
		if (!origin || allowedOrigins.includes(origin)) return callback(null, true)
		return callback(new Error("CORS_ORIGIN_NOT_ALLOWED"))
	},
	methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type", "Authorization"],
	optionsSuccessStatus: 204,
}

app.disable("x-powered-by")
app.use(helmet())
app.use(cors(corsOptions))
app.use(express.json({ limit: "32kb" }))
app.use("/api", apiRateLimit)
app.use("/api/health", healthRouter)
app.use("/api/contact", contactRouter)
app.use("/api/ai", aiRouter)
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`DM Digital API listening on ${port}`))
