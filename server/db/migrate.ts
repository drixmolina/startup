import "dotenv/config"
import { readFile } from "node:fs/promises"
import { getDatabase, closeDatabase } from "./database.js"

const database = getDatabase()
if (!database) throw new Error("DATABASE_URL is required to run migrations.")

try {
  const schema = await readFile(new URL("./001_initial.sql", import.meta.url), "utf8")
  await database.query(schema)
  console.log("Database migrations applied.")
} finally {
  await closeDatabase()
}