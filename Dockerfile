FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine AS runner

RUN npm start -p 3000

EXPOSE 3000

CMD ["npm", "start"]