FROM node:20.2-alpine
COPY . /infra
WORKDIR /infra
RUN npm install
RUN npm i -g ts-node
CMD npm run prod