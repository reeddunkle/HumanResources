import React, { PropTypes } from 'react'
import JobBox from './JobBox'

const App = ({ data }) => (
  <div>
    <JobBox url="/api/jobs" pollInterval={2000} />
  </div>
)

export default App