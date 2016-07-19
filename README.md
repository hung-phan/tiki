# Tikis

![alt text](https://raw.githubusercontent.com/hung-phan/tiki/master/tiki.gif "application screenshot")

There is an included image that describe the app feature

- Offline mode for websocket using socket.io
- Count down and api to update the timer
- Dut co hon
- Server rendering

# Products

## Development

```bash
$ git clone git@github.com:hung-phan/koa-react-isomorphic.git
$ cd koa-react-isomorphic
$ npm install
```

### Hot reload

```bash
$ npm run watch
$ npm run dev
```

### With server rendering - encourage for testing only

```bash
$ SERVER_RENDERING=true npm run watch
$ npm run dev
```

## Test

```bash
$ npm test
$ npm run test:watch
$ npm run test:lint
$ npm run test:coverage
```

## Debug
```bash
$ npm run watch
$ npm run debug
```

If you use tool like Webstorm or any JetBrains product to debug, you need add `-c` option to `scripts/debug.sh` to prevent
using default browser to debug. Example: `node-debug -p 9999 -b -c prod-server.js`.

## Enable flowtype in development
```bash
$ npm run flow:watch
$ npm run flow:stop # to terminate the server
```

You need to add annotation to the file to enable flowtype (`// @flow`)

## Production

### Normal run

```bash
$ npm run build
$ SECRET_KEY=your_env_key npm start
```

### With pm2

```bash
$ npm run build
$ SECRET_KEY=your_env_key npm run pm2:start
$ npm run pm2:stop # to terminate the server
```
