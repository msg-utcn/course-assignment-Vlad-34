FROM node:18-alpine

WORKDIR usr/src/app

COPY . .
RUN npm ci
RUN npm run build:api:prod
CMD ["node", "dist/apps/api/main.js"]
