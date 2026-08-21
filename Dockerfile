FROM node:22-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.server.json ./
RUN corepack enable && pnpm install --frozen-lockfile --prod=false
COPY server ./server
COPY .env.example ./
RUN pnpm run build:server
EXPOSE 8787
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s CMD node -e "fetch('http://127.0.0.1:8787/api/health').then((response) => { if (!response.ok) process.exit(1) }).catch(() => process.exit(1))"
CMD ["pnpm", "start"]
