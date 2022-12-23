FROM node

USER node

WORKDIR /home/node/app/src

ENTRYPOINT [ "npx" ]