import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import JobList from './JobList';
import JobForm from '../components/JobForm';
import { addJob } from '../actions/actions';



class JobBox extends React.Component {
  constructor(props) {
    super(props);
    console.log("JobBox constructor");
  };

  render() {
    console.log("Entered JobBox component render")
    const { jobs, onItemClick } = this.props;
    const { addJob } = this.props.actions;

    return (
      <div className="jobBox">
        <h2>Jobs</h2>
        <JobForm addJob={addJob} />
        <JobList jobs={jobs} onItemClick={onItemClick} />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("JobBox MDTP ");
  return {
    onItemClick: (id) => {
      dispatch(toggleEdit(id))
    },
    actions: bindActionCreators({addJob}, dispatch)
  };
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(JobBox);