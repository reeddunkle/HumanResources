import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import jobsReducer from '../reducers/jobsReducer';
import { fetchData } from '../actions/actions';

const rootReducer = combineReducers({
  jobs: jobsReducer,
})

export default rootReducer