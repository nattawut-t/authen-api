FROM node:8.5.0-alpine

WORKDIR /src

COPY package.json .
COPY yarn.lock .
RUN npm install -g yarn && yarn install

COPY . .

EXPOSE 3000
CMD [ "yarn", "start" ]