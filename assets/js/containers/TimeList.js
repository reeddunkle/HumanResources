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

    const { onItemClick } = this.props;
    const time = this.props.time;

    var timeArray = Object.keys(time).map(key => {
      return time[key];
    })

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
          {timeArray.map(t => {
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

const mapDispatchToProps = (dispatch) => {
  console.log("TimeList MDTP ", onItemClick);
  return {
    onItemClick: (id) => {
      console.log("Dispatching toggleEdit. id=", id);
      dispatch(toggleEdit(id))
    }
  }
}


export default connect({}, mapDispatchToProps)(TimeList)