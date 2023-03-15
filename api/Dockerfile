# Line order matters, every directie create a layer
# allways create .dockerignore and add node_modules to file to ignore, when docker build process run it taring src and send to docker engine,
# so it makes .tar file smaller (without node_modules)

FROM node:14-alpine
# Create app directory
RUN apk add --update \
    tini \
    python3 \
    bash \
    python3-dev \
    py-pip \
  && pip install virtualenv

# check every 30s to ensure this service returns HTTP 200
# HEALTHCHECK --interval=30s CMD node healthcheck.js

#If the app directory does not exist, it will be created
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json package-lock*.json ./

RUN npm install && npm cache clean --force --loglevel=error
# If you are building your code for production
# RUN npm install --only=production
USER node


# Bundle app source
COPY --chown=node:node . .

# wrap node process in tini
ENTRYPOINT [ "/sbin/tini", "--" ]



# CDM node, not npm
# requires another app to run, run subproccess, unnecesary program layer
# doesnt work well as an init PI 1 process
CMD ["node", "./index.js"]