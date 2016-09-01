import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios'
import JobList from './JobList'
import JobForm from './JobForm'
import { loadJobs, addJob } from '../actions/actions';



class JobBox extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(1, "Calling Dispatch");
    this.props.actions.loadJobs();
  }
  render() {
    return (
      <div className="jobBox">
        <h2>Jobs</h2>
        <JobForm addJob={this.props.actions.addJob} />
        <JobList jobs = {this.props.jobs} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({loadJobs, addJob}, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobBox)