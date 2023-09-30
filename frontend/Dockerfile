FROM node:18-alpine as node

WORKDIR /app

COPY app/package* ./
RUN npm i

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["npm", "run", "dev"]