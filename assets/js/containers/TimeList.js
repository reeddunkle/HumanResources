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

    const { time, onItemClick } = this.props;

    var timeArray = Object.keys(time).sort().map(key => {
      return {...time[key], id: key};
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

export default TimeList
