import IO from 'socket.io-client';
import { connect, disconnect } from './logic-bundle';

export const socketURL =
  process.env.RUNTIME_ENV === 'client' ?
    window.location.origin :
    'http://localhost';


export default (store) => {
  const socket = new IO(socketURL);

  socket.on('connect', () => store.dispatch(connect(socket)));
  socket.on('disconnect', () => store.dispatch(disconnect()));
  socket.on('downstream', (action) => store.dispatch(action));

  return socket;
};
