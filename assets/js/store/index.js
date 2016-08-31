import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import jobsReducer from '../reducers/jobsReducer';

var reducers = combineReducers({
  jobs: jobsReducer
})

const configureStore = (initialState) => {
  const store = createStore(reducers, applyMiddleware(thunk));
  return store;
};

export default configureStore
