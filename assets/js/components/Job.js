import React from 'react'

const Job = ({ title, children }) => (
  <div className="job">
    <h3 className="jobTitle">
      {title}
    </h3>
    {children}
  </div>
)

export default Job