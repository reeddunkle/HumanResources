import { Navbar, FormGroup } from 'react-bootstrap';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import JobList from './JobList';
import JobForm from '../components/JobForm';
import { addJob } from '../actions/actions';


const JobBox = ({ jobs, onItemClick, actions }) => {
  var jobsArray = Object.keys(jobs).sort().map(key => {
    return jobs[key];
  })
  return (
    <div className="jobBox">
      <Navbar.Collapse>
        <Navbar.Form className="jobForm">
          <FormGroup>
            <h2>Jobs</h2>
            <JobForm addJob={actions.addJob} />
            <JobList jobs={jobsArray} onItemClick={onItemClick} />
          </FormGroup>
        </Navbar.Form>
      </Navbar.Collapse>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => (
  {
    onItemClick: (id) => {
      dispatch(toggleEdit(id))
    },
    actions: bindActionCreators({addJob}, dispatch)
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(JobBox);
