# Stage 1: Build the frontend
FROM node:20 AS frontend-builder

ENV NODE_ENV=frontend-builder

WORKDIR /frontend

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["sh", "-c", "npm run start:frontend-builder"]