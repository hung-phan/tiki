import React from 'react';

const Message = ({ product, timer, token }) => {
  if (!timer.readyToBuy) {
    return (
      <span>Waiting</span>
    );
  }

  if (product.isBought) {
    if (product.userToken === token) {
      return (
        <span>Congrats</span>
      );
    }

    return (
      <span>Too slow</span>
    );
  }

  return (
    <span>Buy</span>
  );
};

Message.propTypes = {
  timer: React.PropTypes.shape({
    readyToBuy: React.PropTypes.boolean,
  }),
  token: React.PropTypes.string,
  product: React.PropTypes.shape({
    isBought: React.PropTypes.boolean,
    userToken: React.PropTypes.string,
  }),
};

export default Message;
