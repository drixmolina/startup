import pg from "pg"

const { Pool } = pg
let pool: pg.Pool | undefined

export function getDatabase() {
  if (!process.env.DATABASE_URL) return undefined
  pool ??= new Pool({ connectionString: process.env.DATABASE_URL, max: 5, idleTimeoutMillis: 30_000 })
  return pool
}

export async function saveContact(submission: {
  name: string
  businessName?: string
  email: string
  phone?: string
  industry?: string
  projectType?: string
  budget?: string
  timeline?: string
  message: string
}) {
  const database = getDatabase()
  if (!database) return null
  const result = await database.query(
    `insert into contacts (name, business, email, phone, industry, project, budget, timeline, description)
     values ($1, $2, $3, $4, $5, $6, $7, $8, $9)
     returning id`,
    [submission.name, submission.businessName, submission.email, submission.phone, submission.industry, submission.projectType, submission.budget, submission.timeline, submission.message],
  )
  return result.rows[0]?.id as string | undefined
}

export async function checkDatabase() {
  const database = getDatabase()
  if (!database) return "not_configured" as const
  await database.query("select 1")
  return "ok" as const
}

export async function closeDatabase() {
  if (pool) await pool.end()
  pool = undefined
}
