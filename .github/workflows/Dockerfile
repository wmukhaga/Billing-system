# Build stage
FROM node:24 AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY docker.env /docker.env
EXPOSE 80
CMD ["/bin/sh", "-c", "if [ -f /docker.env ]; then set -a; . /docker.env; set +a; fi; nginx -g 'daemon off;'"]
