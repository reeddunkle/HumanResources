import { combineReducers } from 'redux'
import jobs from './jobs'
import visibilityFilter from './visibilityFilter'

const jobsApp = combineReducers({
  jobs,
  visibilityFilter
})

export default jobsApp