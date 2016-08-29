import { combineReducers } from 'redux'
import jobs from './jobs'
import visibilityFilter from './visibilityFilter'
import serverState from './server.js'

const jobsApp = combineReducers({
  serverState,
  jobs,
  visibilityFilter
})

export default jobsApp