import { createAction, handleActions } from 'redux-actions';

export const CONNECT = 'socket/CONNECT';
export const DISCONNECT = 'socket/DISCONNECT';
export const UPSTREAM = 'socket/UPSTREAM';
export const ADD_ACTION_TO_STACK = 'socket/ADD_ACTION_TO_STACK';
export const CLEAR_ACTION_STACK = 'socket/CLEAR_ACTION_STACK';

type AddActionToStackAction = { payload: Object };

const upstream = (socket, action) => (dispatch: Function) => {
  dispatch({ type: UPSTREAM, payload: { action, socket } });
  socket.emit('upstream', action);
};
const addActionToStack = createAction(ADD_ACTION_TO_STACK);
const clearActionStack = createAction(CLEAR_ACTION_STACK);
export const messaging = (socket, action) => (dispatch: Function) => {
  if (socket.connected) {
    dispatch(upstream(socket, action));
  } else {
    dispatch(addActionToStack(action));
  }
};
export const connect = (socket) => (dispatch: Function, getState: Function) => {
  dispatch({ type: CONNECT });

  const actionStack = getState().socket.actionStack;

  actionStack.forEach(action => {
    dispatch(upstream(socket, action));
  });

  if (actionStack.length > 0) {
    dispatch(clearActionStack());
  }
};
export const disconnect = createAction(DISCONNECT);

export default handleActions({
  [CONNECT]: (state) => ({ ...state, status: 'connected' }),
  [DISCONNECT]: (state) => ({ ...state, status: 'disconnected' }),
  [ADD_ACTION_TO_STACK]: (state, action: AddActionToStackAction) => ({
    ...state, actionStack: [...state.actionStack, action.payload],
  }),
  [CLEAR_ACTION_STACK]: (state) => ({
    ...state, actionStack: [],
  }),
}, {
  status: '',
  actionStack: [],
});
