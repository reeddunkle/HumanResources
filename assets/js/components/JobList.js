import React from 'react'
import { connect } from 'react-redux';
import Job from './Job'

class JobList extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const {jobs} = this.props;
    return (
      <div className='container'>
        <table>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Hourly Rate</th>
              <th>Tax Rate</th>
            </tr>
          </thead>
          <tbody>
          {jobs.map(job => {
            return (
              <Job key={job.id} job={job} />
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }
};

const mapStateToProps = ({ jobs }) => {
  var jobsArray = Object.keys(jobs).map(key => {
    return jobs[key];
  })
  console.log(jobs);
  return {jobs: jobsArray || []};
}


export default connect(mapStateToProps)(JobList)