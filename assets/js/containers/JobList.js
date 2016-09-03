import React from 'react';
import { connect } from 'react-redux';
import Job from '../components/JobComponent';
import { toggleEdit } from '../actions/actions'

class JobList extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    console.log("JobList props: ", this.props);

    const { jobs, onItemClick } = this.props;

    var jobsArray = Object.keys(jobs).sort().map(key => {
      return jobs[key];
    })

    return (
      <div className='container'>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Hourly Rate</th>
              <th>Tax Rate</th>
            </tr>
          </thead>
          <tbody>
          {jobsArray.map(job => {
            return (
              <Job
                key={job.title}
                job={job}
                onClick={() => onItemClick(job.title)}
              />
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }
};

export default JobList
