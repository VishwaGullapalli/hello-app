#FROM node:24-alpine
#WORKDIR /app
#COPY package* ./
#RUN npm install

FROM node:24-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

FROM node:24-alpine
WORKDIR /app
COPY --from=build-stage /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
USER node
CMD ["npm", "start"]
