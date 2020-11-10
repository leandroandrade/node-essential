FROM node:10

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install --production

COPY . .

COPY .env.example .env

COPY --chown=node:node . .

USER node

EXPOSE 3333

CMD [ "npm", "start" ]
