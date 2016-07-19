import { handleActions } from 'redux-actions';

type SetTokenAction = { payload: string };

export const SET_TOKEN = 'token/SET_TOKEN';

export default handleActions({
  [SET_TOKEN]: (state, action: SetTokenAction) => action.payload,
}, '');
