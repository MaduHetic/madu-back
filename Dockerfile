FROM node:12.14

WORKDIR /home/app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
