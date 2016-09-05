import { Table } from 'react-bootstrap';

import React from 'react';
import Job from '../containers/Job';


const JobList = ({ jobs }) => {
  var jobsArray = Object.keys(jobs).sort().map(key => {
    return jobs[key];
  });
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Job Title</th>
            <th width="85">Hourly Rate ($)</th>
            <th width="85">Tax Rate ($)</th>
          </tr>
        </thead>
        <tbody>
          {jobsArray.map(job => {
            return (
              <Job
                key={job.title}
                job={job}
              />
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default JobList
