import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios'
import TimeList from '../components/TimeList'
import TimeForm from '../components/TimeForm'
import { loadTime, addTime } from '../actions/actions';



class TimeBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { time } = this.props;

    return (
      <div className="timeBox">
        <h2>Time Logged</h2>
        <TimeForm addTime={this.props.actions.addTime} />
        <TimeList time={time} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({ addTime }, dispatch) }
}

export default connect({}, mapDispatchToProps)(TimeBox)