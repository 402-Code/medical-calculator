FROM node:16
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm i
COPY . . 
CMD ["npm", "run", "dev"]
