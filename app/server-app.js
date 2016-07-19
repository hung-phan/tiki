import Koa from 'koa';
import debug from 'debug';
import * as config from 'server/middlewares';
import io from 'server/socket';
import apis from 'server/apis/base';
import controllers from 'server/controllers/base';

const app = new Koa();

// setup middlewares
config.loggingLayer(app);
config.initialLayer(app);
config.errorLayer(app);
config.apiLayer(app, apis);
config.securityLayer(app);
config.renderLayer(app, controllers);
config.socketLayer(app, io);

// error logs
app.on('error', (error) => {
  debug('error')(error);
});

export default app;
