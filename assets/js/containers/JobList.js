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
    console.log("jobs prop: ", this.props.jobs);
    console.log("onItemClick prop: ", this.props.onItemClick);
    const {jobs, onItemClick} = this.props;
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
          {jobs.map(job => {
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

const mapStateToProps = (state) => {
  console.log("JobList MSTP ", jobs)
  let localJobs = state.displayItems.jobs
  var jobsArray = Object.keys(localJobs).map(key => {
    return localJobs[key];
  })
  return {jobs: jobsArray || [], };
}

const mapDispatchToProps = (dispatch) => {
  console.log("JobList MDTP ", onItemClick);
  return {
    onItemClick: (id) => {
      console.log("Dispatching toggleEdit. id=", id);
      dispatch(toggleEdit(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(JobList)