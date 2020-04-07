FROM node:10.16.2-alpine

WORKDIR /usr/app

RUN yarn global add lerna

COPY package.json .
COPY yarn.lock .

COPY @iris/common/ ./@iris/common
COPY services/public-api ./services/public-api

RUN yarn bootstrap

WORKDIR /user/app/services/public-api
EXPOSE 4000
CMD yarn start:dev
