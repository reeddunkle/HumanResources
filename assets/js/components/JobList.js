import React from 'react'
import { connect } from 'react-redux';
import Job from './Job'

// @connect(state => ({data: state.app.data}))
class JobList extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const {data} = this.props;
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
          {data.map(job => {
            return (
              <Job key={job.title} job={job} />
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }
};

// export default JobList
export default connect(state => ({data: state.app.data}))(JobList)