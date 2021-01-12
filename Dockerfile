FROM node:14.15.4-alpine3.10 as node

COPY config/node/docker-entrypoint.sh /usr/local/bin/docker-entrypoint

RUN  set -eux; \
    chmod +x /usr/local/bin/docker-entrypoint ; \
    apk add  --no-cache \
    curl \
    bash \
    git

ENTRYPOINT [ "docker-entrypoint" ]

FROM node as nuxtjs

WORKDIR /srv/app

ENV HOST=0.0.0.0
ENV PORT=8080

COPY . /srv/app/

CMD ["npm", "run", "dev"]