import React from 'react';
import { connect } from 'react-redux';
import { compose, pure } from 'recompose';

export const Socket = ({ socket }) => (
  <div className="row">
    <div className="col-md-12">
      <h4>
        Status: {socket.status};
        Pending actions: {socket.actionStack.map(action => JSON.stringify(action)).join('; ')}
      </h4>
    </div>
  </div>
);

Socket.propTypes = {
  socket: React.PropTypes.shape({
    status: React.PropTypes.string,
    actionStack: React.PropTypes.array,
  }),
};

export const enhance = compose(
  connect(
    ({ socket }) => ({
      socket,
    })
  ),
  pure
);

export default enhance(Socket);
