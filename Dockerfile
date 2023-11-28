FROM oven/bun AS builder
WORKDIR /app
COPY . .

# Run build process
RUN bun i
RUN bun run build

FROM oven/bun
COPY --from=builder /app/build .
EXPOSE 3000
CMD ["bun", "run", "start"]