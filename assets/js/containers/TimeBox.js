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
  componentDidMount() {
    console.log(1, "Calling Dispatch");
    this.props.actions.loadTime();
  }
  render() {
    return (
      <div className="timeBox">
        <h2>Time Logged</h2>
        <TimeForm addTime={this.props.actions.addTime} />
        <TimeList time={this.props.time} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("JobBox state: ", state)
  return { jobs: state.displayItems.time };
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({loadJobs, addJob}, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobBox)