import { Table } from 'react-bootstrap';

import React from 'react';
import Time from '../containers/Time';


const TimeList = ({ time }) => {
  var timeArray = Object.keys(time).sort().map(key => {
    return {...time[key], id: key};
  });
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th width="95">Date Logged</th>
            <th width="105">Job Title</th>
            <th width="60">Minutes</th>
            <th>Summary of work</th>
          </tr>
        </thead>
        <tbody>
          {timeArray.map(t => {
            return (
              <Time
                key={t.id}
                time={t}
              />
            )
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TimeList
