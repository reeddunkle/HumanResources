import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios'
import JobList from './JobList'
import JobForm from './JobForm'
import { fetchData, addJob } from '../actions/actions';



class JobBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleJobSubmit = this.handleJobSubmit.bind(this)
  }
  handleJobSubmit(job) {
    // TODO: submit to the server and refresh the list
  }
  componentDidMount() {
    this.props.actions.fetchData("/api/jobs");
  }
  render() {
    return (
      <div className="jobBox">
        <h2>Jobs</h2>
        <JobList />
        <JobForm addJob={this.props.actions.addJob} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({fetchData, addJob}, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobBox)