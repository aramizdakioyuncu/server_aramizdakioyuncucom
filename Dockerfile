# 1. Aşama: Build
FROM node:20-alpine AS build-stage
# Native modüller için gerekli kütüphaneleri ekle
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Hafıza ve hız optimizasyonu
ENV NODE_OPTIONS="--max-old-space-size=4096"

COPY package.json ./
# Yarn kullanarak kur (Genelde daha stabil ve hızlıdır)
RUN yarn install --network-timeout 600000

COPY . .
RUN npm run build

# 2. Aşama: Nginx
FROM nginx:alpine
COPY --from=build-stage /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]