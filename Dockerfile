FROM node:24-alpine
EXPOSE 8080
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=8080
ENV NAME=""
CMD ["npm", "start"]