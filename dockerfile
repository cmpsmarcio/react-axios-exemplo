FROM node:14.8-slim
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]