import React from 'react';
import map from 'lodash/fp/map';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, getContext, pure } from 'recompose';
import { messaging } from 'client/components/socket/logic-bundle';
import Item from './item';

export const Products = ({ products, timer, socket, token, actions }) => (
  <div className="row">
    {
      map((product) => (
        <Item
          key={product.id}
          token={token}
          product={product}
          socket={socket}
          messaging={actions.messaging}
          timer={timer}
        />
      ))(products)
    }
  </div>
);

Products.propTypes = {
  products: React.PropTypes.array,
  token: React.PropTypes.string,
  timer: React.PropTypes.object,
  actions: React.PropTypes.object,
  socket: React.PropTypes.object,
};

export const enhance = compose(
  connect(
    ({ products, timer, token }) => ({
      products,
      timer,
      token,
    }),
    dispatch => ({
      actions: bindActionCreators({
        messaging,
      }, dispatch),
    })
  ),
  getContext({
    socket: React.PropTypes.object,
  }),
  pure
);

export default enhance(Products);
