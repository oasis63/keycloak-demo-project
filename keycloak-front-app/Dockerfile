# Stage 1: Build
# Stage name is optional but can be useful for clarity and multi-stage builds
# this stage name be used in different stages to copy artifacts from this stage
FROM node:20-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]