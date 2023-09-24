FROM node:lts-alpine

COPY . /app

WORKDIR /app

RUN apk update && apk upgrade

EXPOSE 4700
ENTRYPOINT [ "/bin/sh", "-c", "yarn && yarn add lite-server @angular/cdk && yarn build && npx lite-server --baseDir=\"dist/portfolio\"" ]
