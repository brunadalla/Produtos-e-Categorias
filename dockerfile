FROM node:16

ENV PORT=3333

EXPOSE 3333

WORKDIR /app

COPY  package*.json ./

RUN yarn

COPY . .

USER node

CMD ["yarn", "start"]