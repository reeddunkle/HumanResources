import { Table } from 'react-bootstrap';

import React from 'react';
import { connect } from 'react-redux';
import Time from '../components/TimeComponent';
import { toggleEdit } from '../actions/actions'


const TimeList = ({ time, onItemClick }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th width="95">Date Logged</th>
            <th width="105">Job Title</th>
            <th width="60">Minutes</th>
            <th>Summary of work</th>
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
      </Table>
    </div>
  );
};

export default TimeList
