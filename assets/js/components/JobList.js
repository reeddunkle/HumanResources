import React from 'react'
import Job from './Job'

const JobList = ({ data }) => (
  <div className="jobList">
    {data.map(job =>
      <Job title={job.title} key={job.id}>
        {"Hourly rate: " + job.hourly_rate + " (tax: " + job.tax_rate + ")"}
      </Job>
    )}
  </div>
)

export default JobList