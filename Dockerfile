FROM node:latest AS build
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm ci --only=production

FROM node:lts-alpine@sha256:a90ec96d44c8070fce762a8582fe0f906cbe912f89a743be497b74c2d14a2bc8
RUN apk add dumb-init
ENV NODE_ENV production
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node . /usr/src/app

EXPOSE 3333

CMD ["dumb-init", "node", "src/server.js"]
