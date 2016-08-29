import React from 'react'
import axios from 'axios'
import JobList from './JobList'
import JobForm from './JobForm'
import {fetchData} from '../actions/actions';

class JobBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadJobsFromServer = this.loadJobsFromServer.bind(this)
    this.handleJobSubmit = this.handleJobSubmit.bind(this)
  }
  loadJobsFromServer() {
    this.setState({data: fetchData(this.props.url)});
    // fetch(this.props.url).then((response) => {
    //   return response.json();
    // })
    // .then((data) => {
    //   this.setState({data: data});
    // });
  }
  handleJobSubmit(job) {
    // TODO: submit to the server and refresh the list
  }
  componentDidMount() {
    this.loadJobsFromServer();
    setInterval(this.loadJobsFromServer, this.props.pollInterval);
  }
  render() {
    return (
      <div className="jobBox">
        <h2>Jobs</h2>
        <JobList data={this.state.data} />
        <JobForm onCommentSubmit={this.handleJobSubmit} />
      </div>
    );
  }
}

export default JobBox