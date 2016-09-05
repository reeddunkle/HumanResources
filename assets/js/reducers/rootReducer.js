import { combineReducers } from 'redux';
import itemsReducer from '../reducers/itemsReducer';
import visibilityFilter from '../reducers/visibilityFilter';
import serverState from './server.js';

const rootReducer = combineReducers({
  displayItems: itemsReducer,
  visibilityFilter,
  serverState
});

export default rootReducer;