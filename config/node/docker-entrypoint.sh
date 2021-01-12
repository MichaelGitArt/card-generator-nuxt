#!/bin/bash

if [ "$1" = 'npm' ] ; then
  if [ "$NODE_ENV" != 'production' ]; then
    npm install
  fi

  if [ "$1" = 'npm' ]  && [ "$2" = 'run' ] && [ "$3" = 'start' ]; then

    if [ -n "${API_BASE_URL}" ] && [ -d ".nuxt" ]; then
        >&2 echo "Setting API_BASE_URL to ${API_BASE_URL}"
        find ".nuxt" -type f -exec  sed  -i "s~http://localhost:8000/api/v1/~${API_BASE_URL}~g" {} +
    else
        npm run build
    fi
  fi

fi

exec "$@"