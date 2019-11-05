FROM node:10.15.3-alpine

WORKDIR /usr/src/app
RUN npm i -g @angular/cli
COPY package.json package.json
RUN npm install --silent
COPY . .
RUN npm run build
EXPOSE 8080

CMD [ "npm","start" ]
