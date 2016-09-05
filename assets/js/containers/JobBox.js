import { Navbar, FormGroup } from 'react-bootstrap';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import JobList from '../components/JobList';
import JobForm from '../components/JobForm';
import { addJob } from '../actions/actions';


const JobBox = ({ jobs, actions }) => (
  <div className="jobBox">
    <Navbar.Collapse>
      <Navbar.Form className="jobForm">
        <FormGroup>
          <h2>Jobs</h2>
          <JobForm
            addJob={actions.addJob}
          />
          <JobList
            jobs={jobs}
          />
        </FormGroup>
      </Navbar.Form>
    </Navbar.Collapse>
  </div>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({addJob}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(JobBox);
