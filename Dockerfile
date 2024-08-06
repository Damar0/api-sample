FROM node:20.15.1

WORKDIR /app
COPy package*.json ./
RUN npm install

COPY . . 

RUN npx prisma generate

RUN npm run build

EXPOSE 3005
CMD npm start
