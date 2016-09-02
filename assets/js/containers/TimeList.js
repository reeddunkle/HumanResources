import React from 'react';
import { connect } from 'react-redux';
import Time from '../components/TimeComponent';
import { toggleEdit } from '../actions/actions'

class TimeList extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    console.log("TimeList props: ", this.props);
    console.log("Times prop: ", this.props.items.times);
    console.log("onItemClick prop: ", this.props.onItemClick);
    const {time, onItemClick} = this.props;
    return (
      <div className='container'>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th>Date Logged</th>
              <th>Job Title</th>
              <th>Minutes</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
          {time.map(t => {
            return (
              <Time
                key={t.id}
                time={t}
                onClick={() => onItemClick(t.id)}
              />
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  console.log("JobList MSTP ", items.time)
  let localTime = state.displayItems.time
  var timeArray = Object.keys(localTime).map(key => {
    return localTime[key];
  })
  return {time: timeArray || [], };
}

const mapDispatchToProps = (dispatch) => {
  console.log("JobList MDTP ", onItemClick);
  return {
    onItemClick: (id) => {
      console.log("Dispatching toggleEdit. id=", id);
      dispatch(toggleEdit(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(JobList)