import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import * as reducers from './reducer';
import middlewares from './middleware';

const reducer = combineReducers(reducers);

const finalCreateStore = compose.apply(this, middlewares.map(md =>
  applyMiddleware(md)))(createStore);

export const Store = finalCreateStore(reducer);
