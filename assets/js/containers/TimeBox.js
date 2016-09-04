import { Navbar, FormGroup } from 'react-bootstrap';

import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TimeList from './TimeList'
import TimeForm from '../components/TimeForm'
import { addTime } from '../actions/actions';


const TimeBox = ({ time, jobTitles, onItemClick, actions }) => {
  var timeArray = Object.keys(time).sort().map(key => {
    return {...time[key], id: key};
  });
  return (
    <div className="timeBox">
      <Navbar.Collapse>
        <Navbar.Form className="jobForm">
          <FormGroup>
            <h2>Time Logged</h2>
            <TimeForm addTime={actions.addTime} jobTitles={jobTitles} />
            <TimeList time={timeArray} onItemClick={onItemClick} />
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
    actions: bindActionCreators({ addTime }, dispatch)
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(TimeBox)
