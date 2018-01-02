FROM node:9.3.0-alpine

WORKDIR /src

COPY package.json .
COPY yarn.lock .

RUN npm install -g yarn
RUN yarn install

COPY . .

EXPOSE 3000
CMD [ "yarn", "start" ]
