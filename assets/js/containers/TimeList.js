import { Table } from 'react-bootstrap';

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
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th width="85">Date Logged</th>
              <th width="105">Job Title</th>
              <th width="65">Minutes</th>
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
        </Table>
      </div>
    )
  }
};

export default TimeList
