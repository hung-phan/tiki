import React from 'react';
import style from './item.scss';
import Message from './message';
import { buy } from './logic-bundle';

const Item = ({ product, timer, socket, token, messaging }) => (
  <div className={`col-xs-12 col-sm-6 col-md-3 text-center ${style.item}`}>
    <div className="row">
      <img className="col-md-12" alt="product product" src="http://placehold.it/300x200" />
    </div>

    <div className="row">
      <div className={`col-md-12 ${style.item__text}`}>
        {product.text}
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <button
          type="button"
          className={`btn ${product.isBought ? 'btn-default' : 'btn-success'}`}
          disabled={product.isBought || !timer.readyToBuy}
          onClick={() => {
            if (timer.readyToBuy) {
              messaging(socket, buy(product.id, token));
            }
          }}
        >
          <Message product={product} timer={timer} token={token} />
        </button>
      </div>
    </div>
  </div>
);

Item.propTypes = {
  timer: React.PropTypes.shape({
    readyToBuy: React.PropTypes.boolean,
  }),
  product: React.PropTypes.shape({
    id: React.PropTypes.string,
    text: React.PropTypes.string,
    isBought: React.PropTypes.boolean,
  }),
  token: React.PropTypes.string,
  socket: React.PropTypes.object,
  messaging: React.PropTypes.func,
};

export default Item;
