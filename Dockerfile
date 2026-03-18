# 1. Aşama: Build
FROM node:20-alpine AS build-stage
# Native modüller için gerekli kütüphaneleri ekle
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Hafıza ve hız optimizasyonu
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Önemli: Hem package.json hem de package-lock.json kopyalanmalı
COPY package*.json ./

# npm ci (Clean Install) kullanarak kur. 
# package-lock.json dosyasını baz alarak tam olarak aynı versiyonları kurar.
RUN npm ci --network-timeout 600000

COPY . .
RUN npm run build

# 2. Aşama: Nginx
FROM nginx:alpine
COPY --from=build-stage /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
