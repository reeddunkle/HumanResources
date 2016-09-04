import React from 'react'

const Job = ({ job, onClick }) => (
  <tr onClick={onClick}>
    <td>{job.title}</td>
    <td>{job.hourly_rate}</td>
    <td>{job.tax_rate}</td>
  </tr>
);

export default Job;
