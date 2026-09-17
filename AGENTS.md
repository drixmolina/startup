# DM Digital Solutions

This repo is a Vite + React frontend and a separate Express API for DM Digital Solutions. Treat the app as a full-stack project: frontend code lives in `src/`, server logic lives in `server/`, and deployment is split across Vercel + an HTTPS API service.

## How to work in this repo

- Frontend entry: `src/main.tsx`, `src/App.tsx`, `src/index.css`
- Main route/configuration source: `src/App.tsx`
- API entry: `server/index.ts`
- API routes: `server/routes/`
- Database setup: `server/db/` and `pnpm db:migrate`
- Shared product docs: `README.md`

## Run and build

Use the scripts from `package.json`:

- `pnpm dev` — run the Vite frontend
- `pnpm server` — run the Express API locally
- `pnpm build` — build frontend and compile server TypeScript
- `pnpm db:migrate` — apply the PostgreSQL schema
- `pnpm start` — run the compiled server from `dist-server/`

The default local origins are:

- Frontend: `http://localhost:8443`
- API: `http://localhost:8787`

## Architecture rules

- Do not deploy the Express app as a Vercel static build. The frontend is a Vercel SPA and the API is a separate Node service.
- Keep frontend-only configuration in `VITE_` env vars; never put private secrets in frontend vars.
- Keep server-side secrets in `.env` or the deployment environment, not in the app bundle.
- CORS is explicit and controlled by `CORS_ORIGINS` on the API side.
- The contact flow involves validation, DB persistence, email sending, and rate limiting; do not bypass the existing API layers when changing contact behavior.

## Frontend conventions

- Use React Router routes in `src/App.tsx` and keep route additions consistent with the existing page layout.
- Prefer Tailwind utility classes and keep styling in `src/index.css` only for global/theme-level CSS.
- Default export React components.
- Keep code style consistent with the existing TypeScript/TSX files: double quotes where needed, balanced JSX, and no broken imports.

## Backend conventions

- API logic belongs in `server/`, not in the frontend.
- Route handlers, validation, middleware, and database helpers should remain modular under `server/routes/`, `server/middleware/`, and `server/db/`.
- Preserve the existing API error handling and validation patterns instead of introducing ad hoc responses.

## Environment and secrets

- Copy `.env.example` to `.env` for local setup when needed.
- Never commit `.env` files or production credentials.
- `VITE_API_URL` is the public HTTPS URL of the deployed API; it is not a database credential or private key.
- For production, ensure `DATABASE_URL`, `EMAIL_API_KEY`, `CONTACT_RECIPIENT_EMAIL`, `AI_API_KEY`, and related values are configured in the deployment environment before relying on those features.

## Safety notes for AI agents

- Prefer minimal, surgical edits and follow the current repo patterns.
- Before changing API behavior, inspect the route and validation code in `server/routes/` and `server/middleware/`.
- Before editing frontend pages, check the relevant page and the shared layout in `src/components/`.
- If a task requires deployment or secret rotation details, treat them as operational concerns rather than code changes.

## Related docs

- [README.md](README.md) — deployment, environment variables, and full project setup
