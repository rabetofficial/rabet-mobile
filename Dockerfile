FROM node:16.14.2-slim

COPY package.json package-lock.json /app/
WORKDIR /app
RUN npm ci
COPY . /app
RUN rm .eslintrc.json
RUN npm run build

CMD ["npm", "run", "start"]
