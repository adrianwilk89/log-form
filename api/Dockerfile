FROM node:14-alpine

RUN apk add --update \
    tini \
    python3 \
    bash \
    python3-dev \
    py-pip \
  && pip install virtualenv

WORKDIR /usr/src/app

COPY package.json package-lock*.json ./

RUN npm install && npm cache clean --force --loglevel=error

USER node

COPY --chown=node:node . .

ENTRYPOINT [ "/sbin/tini", "--" ]

CMD ["node", "./index.js"]