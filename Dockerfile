FROM oven/bun:1.4.4 AS builder
WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

FROM oven/bun:1.4.4-slim
WORKDIR /app
COPY --from=builder /app/build .
USER bun
EXPOSE 3000
ENV NODE_ENV=production
CMD ["bun", "index.js"]
