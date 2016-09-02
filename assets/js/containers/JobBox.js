import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios'
import JobList from './JobList'
import JobForm from '../components/JobForm'
import { loadJobs, addJob } from '../actions/actions';



class JobBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { jobs } = this.props;
    return (
      <div className="jobBox">
        <h2>Jobs</h2>
        <JobForm addJob={this.props.actions.addJob} />
        <JobList jobs = {jobs} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({addJob}, dispatch) }
}

export default connect({}, mapDispatchToProps)(JobBox)