import { Navbar, FormGroup } from 'react-bootstrap';

import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TimeList from '../components/TimeList'
import TimeForm from '../components/TimeForm'
import { addTime, deleteTime } from '../actions/actions';


const TimeBox = ({ time, jobTitles, actions }) => (
  <div className="timeBox">
    <Navbar.Collapse>
      <Navbar.Form className="jobForm">
        <FormGroup>
          <h2>Time Logged</h2>
          <TimeForm
            addTime={actions.addTime}
            jobTitles={jobTitles}
          />
          <TimeList
            time={time}
          />
        </FormGroup>
      </Navbar.Form>
    </Navbar.Collapse>
  </div>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({addTime}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeBox)
