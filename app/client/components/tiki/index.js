import React from 'react';
import { compose } from 'recompose';
import Socket from 'client/components/socket';
import createSocket from 'client/components/socket/model';
import Timer from 'client/components/timer';
import Products from 'client/components/products';
import fetchDataEnhancer from 'client/helpers/fetch-data-enhancer';
import { fetchProducts } from 'client/components/products/logic-bundle';

export class Tiki extends React.Component {
  static childContextTypes = {
    socket: React.PropTypes.object,
  };

  static contextTypes = {
    store: React.PropTypes.object,
  };

  getChildContext() {
    return {
      socket: this.socket,
    };
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  socket = createSocket(this.context.store);

  render() {
    return (
      <div className="container">
        <Socket />
        <Timer />
        <Products />
      </div>
    );
  }
}

export const enhance = compose(
  fetchDataEnhancer(
    ({ store }) => store.dispatch(fetchProducts())
  )
);

export default enhance(Tiki);
