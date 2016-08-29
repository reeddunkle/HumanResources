import {compose, createStore, applyMiddleware } from 'redux';
import { routerStateReducer, reduxReactRouter } from 'redux-react-router';
import thunk from 'redux-thunk'

import rootReducer from '../reducers';
import createHistory from 'history/lib/createBrowserHistory';

const createAppStore = compose(
  applyMiddleware(thunk),
  reduxReactRouter({createHistory})
)(createStore);

const configureStore = (initialState) => {
  const store = createAppStore(rootReducer, initialState);
  return store;
};

export default configureStore
