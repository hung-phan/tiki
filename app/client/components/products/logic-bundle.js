// @flow
import fetch from 'isomorphic-fetch';
import { createAction, handleActions } from 'redux-actions';
import getUrl from 'client/helpers/get-url';
import findIndex from 'lodash/findIndex';
import { BUY } from './actions';

export const SET_PRODUCTS = 'products/SET_PRODUCTS';

type SetProductsAction = { payload: Object[] };
type BuyAction = {
  payload: { id: string }
};

export const setProducts = createAction(SET_PRODUCTS);
export const buy = (id: string, userToken: string) => ({ type: BUY, payload: { id, userToken } });
export const fetchProducts = () => (dispatch: Function) =>
  fetch(getUrl('/api/v1/products'))
    .then(res => res.json())
    .then(res => dispatch(setProducts(res)));

export default handleActions({
  [SET_PRODUCTS]: (state, action: SetProductsAction) => action.payload,
  [BUY]: (state, action: BuyAction) => {
    const index = findIndex(state, ({ id }) => action.payload.id === id);

    return [
      ...state.slice(0, index), action.payload, ...state.slice(index + 1),
    ];
  },
}, []);
