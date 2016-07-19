import _ from 'lodash';
import Product from 'server/model/product';
import { BUY } from 'client/components/products/actions';
import { COUNT_DOWN } from 'client/components/timer/actions';

export const products = _(50)
                      .range()
                      .map(() => new Product)
                      .value();

export const buy = ({ id, userToken }) => {
  const product = _.find(products, _product => _product.id === id);

  if (product && !product.isBought) {
    product.userToken = userToken;
    product.isBought = true;

    return {
      type: BUY,
      payload: product,
    };
  }

  throw new Error('This product is not available');
};

export const countDown = (timer) => ({ type: COUNT_DOWN, payload: timer });

let timer = 100;

export const getTimer = () => timer;
export const setTimer = (_timer: number) => {
  timer = _timer;
  return timer;
};
