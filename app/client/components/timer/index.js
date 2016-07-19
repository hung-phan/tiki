import React from 'react';
import { connect } from 'react-redux';
import { compose, pure } from 'recompose';
import style from './index.scss';

export const Timer = ({ timer }) => (
  <div className="row">
    <div className={`col-md-12 text-center ${style.container}`}>
      <h1>Count down: {timer.countDown}</h1>
    </div>
  </div>
);

Timer.propTypes = {
  timer: React.PropTypes.shape({
    countDown: React.PropTypes.number,
  }),
};

export const enhance = compose(
  connect(
    ({ timer }) => ({
      timer,
    })
  ),
  pure
);

export default enhance(Timer);
