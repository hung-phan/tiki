import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import products from './components/products/logic-bundle';
import timer from './components/timer/logic-bundle';
import socket from './components/socket/logic-bundle';
import token from './components/token/logic-bundle';

export default combineReducers({
  socket,
  products,
  timer,
  token,
  routing,
});
