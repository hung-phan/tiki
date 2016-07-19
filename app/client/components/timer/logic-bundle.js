// @flow
import { handleActions } from 'redux-actions';
import { COUNT_DOWN } from './actions';

type CountDownAction = { payload: number };

export default handleActions({
  [COUNT_DOWN]: (state, action: CountDownAction) => ({
    ...state, countDown: action.payload, readyToBuy: action.payload === 0,
  }),
}, {
  countDown: 0,
  readyToBuy: true,
});
