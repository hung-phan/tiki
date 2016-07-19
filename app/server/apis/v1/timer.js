import { setTimer } from 'server/fake-database';

export default function (router) {
  router.post('/api/v1/timer', (ctx) => {
    setTimer(ctx.request.body.timer);

    ctx.status = 204;
  });
}
