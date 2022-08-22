# estágio de compilação
FROM node:lts-alpine as build-stage
ENV NODE_OPTIONS=--max_old_space_size=16384
ARG BUILD_SCRIPT=build
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run ${BUILD_SCRIPT}

# estágio de produção
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY devops/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
