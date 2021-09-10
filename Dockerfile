FROM node:14.17.0 AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build 

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .
CMD ["nginx","-g","daemon off;"]

