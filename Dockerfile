FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package.json ./
COPY package-lock.json* ./

# Install dependencies with legacy peer deps flag
RUN npm install --legacy-peer-deps

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Production stage
FROM nginx:alpine AS production

# Copy built files to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]