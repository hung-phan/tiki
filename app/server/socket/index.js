import IO from 'koa-socket';
import { Observable } from 'rx/dist/rx.all';
import { BUY } from 'client/components/products/actions';
import { buy, countDown, setTimer, getTimer } from 'server/fake-database';

const io = new IO;

io.on('connection', (ctx) => {
  console.log(`User ${ctx.socket.id} connected`);
});

io.on('upstream', (ctx, action) => {
  switch (action.type) {
    case BUY:
      io.broadcast('downstream', buy(action.payload));
      break;

    default:
      throw new Error(`Unhandle action.type: ${JSON.stringify(action)}`);
  }
});

const timer$ = Observable.interval(1000).takeWhile(() => getTimer() > 0);

timer$.subscribe(() => {
  io.broadcast(
    'downstream',
    countDown(setTimer(getTimer() - 1))
  );
});

export default io;
