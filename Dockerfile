FROM node:latest AS build

WORKDIR /app

RUN npm install -g npm@latest && npm install -g pnpm@latest

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

FROM node:latest

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist ./dist

CMD ["serve", "dist", "-l", "3000"]
