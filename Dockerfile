FROM oven/bun:latest as build
WORKDIR /app
COPY . .
COPY .env_dist .env
RUN 
RUN npm run build

FROM oven/bun:latest
WORKDIR /app
COPY --from=build /app/release .
COPY --from=build /app/package*.json .
RUN npm ci --only=production

EXPOSE 3000
CMD [ "node", "server.js" ]

# TODO FIX