import { combineReducers } from 'redux'
import itemsReducer from '../reducers/itemsReducer';
import visibilityFilter from '../reducers/visibilityFilter';
import { fetchData } from '../actions/actions';

const rootReducer = combineReducers({
  items: itemsReducer,
  visibilityFilter
})

export default rootReducer