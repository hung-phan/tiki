#!/usr/bin/env bash
if [ -z "${NODE_ENV}" ]; then
  export NODE_ENV=${1:-test}
fi

if [ -z "${PORT}" ]; then
  export PORT=${2:-3001}
fi

istanbul cover ./node_modules/.bin/_mocha -- --compilers js:./compiler './app/**/*-test.js' './tests/**/*.js'