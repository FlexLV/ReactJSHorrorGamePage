# Stage 1: Build the frontend
FROM node:20 AS backend-builder

ENV NODE_ENV=backend-builder

WORKDIR /app/src/client

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["sh", "-c", "npm run start:frontend-builder"]

