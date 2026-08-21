# DM Digital Solutions

React/Vite frontend and Express API for DM Digital Solutions.

## Deployment architecture

The frontend is a Vercel SPA. The API is a persistent Node.js service and should be deployed separately (for example, Render, Railway, Fly.io, or a managed VM). The API connects to a managed PostgreSQL database.

```text
Vercel frontend -> HTTPS API service -> managed PostgreSQL
```

Do not deploy the Express process as a Vercel static build. Set `VITE_API_URL` on Vercel to the public HTTPS API origin.

## Local development

1. Copy `.env.example` to `.env` and fill in the local values.
2. Install dependencies with `pnpm install`.
3. Start the API with `pnpm server`.
4. Start Vite with `pnpm dev`.

The default local origins are `http://localhost:8443` for Vite and `http://localhost:8787` for the API. Add the frontend origin to `CORS_ORIGINS`.

If PostgreSQL is available, apply the schema with:

```text
pnpm db:migrate
```

The contact endpoint stores inquiries when `DATABASE_URL` is configured and sends the notification through Resend. In production, both database storage and email delivery must be configured before inquiries are accepted.

## Build and run

```text
pnpm build
pnpm start
```

`pnpm build` creates the Vercel frontend bundle in `dist/` and compiles the API into `dist-server/`. The Dockerfile runs the compiled API on port `8787`.

## Environment variables

### Frontend / Vercel

- `VITE_API_URL`: public HTTPS origin of the deployed API, for example `https://api.example.com`.

Set this separately for Development, Preview, and Production in Vercel. Never put database, email, AI, or other private credentials in a `VITE_` variable.

Suggested scopes:

- Development: local API URL and local frontend origin.
- Preview: deployed preview API URL and the exact Vercel preview origin(s).
- Production: deployed HTTPS API URL and the production/custom frontend origin.

### API service

- `DATABASE_URL`: managed PostgreSQL connection string.
- `EMAIL_API_KEY`: Resend API key.
- `CONTACT_RECIPIENT_EMAIL`: Gmail or other inbox that receives inquiries.
- `EMAIL_FROM`: verified Resend sender identity or domain address.
- `AI_API_KEY`: provider key for the AI route.
- `AI_MODEL`: provider model name.
- `AI_API_URL`: provider chat-completions URL.
- `PORT`: service port, normally supplied by the host.
- `CORS_ORIGINS`: comma-separated explicit frontend origins, including Vercel Preview and Production/custom domains as needed.
- `NODE_ENV=production`.

Run `pnpm db:migrate` once against the production database before enabling contact submissions. Do not commit `.env` files or production credentials. Any credentials previously placed in a local `.env` must be revoked and rotated.

## API checks

```text
GET /api/health
POST /api/contact
GET /api/ai/agents
POST /api/ai/chat
```

`/api/health` reports database availability without exposing connection details. CORS allows only origins listed in `CORS_ORIGINS` and supports JSON POST preflight requests.

## Vercel

The existing `vercel.json` rewrites browser routes to `index.html`, so direct navigation to `/about`, `/services`, `/projects`, and dynamic detail routes works after deployment. Configure the project root as this repository, use the detected Vite build, and add `VITE_API_URL` in Vercel Environment Variables.

## Readiness status

Ready in code:

- Frontend production build and Vercel SPA routing
- Environment variable structure and `.env.example`
- Ignored environment/build files for GitHub
- Central API client with environment-based URL and user-safe errors
- Explicit CORS allowlist and JSON preflight support
- Contact validation, persistence path, rate limiting, and error handling
- Local API health and invalid-contact validation checks

Pending infrastructure:

- Managed production PostgreSQL and `DATABASE_URL`
- Deployed HTTPS API service
- Verified Resend sender, recipient, and `EMAIL_API_KEY`
- Rotated provider credentials that were ever exposed outside this sanitized workspace
- Vercel Development, Preview, and Production environment variables
- Production CORS origins
- A real end-to-end production inquiry test

Production is not considered fully tested until those values are configured and a real test inquiry is accepted by the deployed API, stored in PostgreSQL, and delivered through the email provider.