import { getTimer } from 'server/fake-database';

export default function (router) {
  router.get('*', async (ctx) => {
    const token = ctx.cookies.get('tiki-authentication') || ctx.tmpToken;

    ctx.body = await ctx.prerender('application/index.marko', {}, {
      token,
      timer: {
        countDown: getTimer(),
        readyToBuy: getTimer() === 0,
      },
    });
  });
}
