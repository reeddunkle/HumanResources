import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios'
import TimeList from './TimeList'
import TimeForm from '../components/TimeForm'
import { loadTime, addTime } from '../actions/actions';



class TimeBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { time, jobTitles, onItemClick } = this.props;
    const { addTime } = this.props.actions;

    return (
      <div className="timeBox">
        <h2>Time Logged</h2>
        <TimeForm addTime={addTime} jobTitles={jobTitles} />
        <TimeList time={time} onItemClick={onItemClick} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("TimeBox MDTP ");
  return {
    onItemClick: (id) => {
      dispatch(toggleEdit(id))
    },
    actions: bindActionCreators({ addTime }, dispatch)
  }
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeBox)