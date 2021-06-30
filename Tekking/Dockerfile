FROM node:12-alpine as build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm i

COPY . .

RUN npm run build --prod

FROM nginx:1.21.0-alpine

COPY --from=build /usr/src/app/dist/Tekking /usr/share/nginx/html

# EXPOSE 4200
# El proyecto correo en el puerto 4200
# CMD ["npm", "start"]
