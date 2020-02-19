FROM node:10
WORKDIR /
COPY package*.json ./
COPY . .
EXPOSE 5002
RUN npm install
ENTRYPOINT [ "node", "server.js" ]
