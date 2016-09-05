import { Table } from 'react-bootstrap';

import React from 'react';
import { connect } from 'react-redux';
import InvoiceTime from './InvoiceTimeComponent';
import { toggleEdit } from '../actions/actions'


const InvoiceList = ({ time }) => (
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
            <InvoiceTime
              key={t.id}
              time={t}
            />
          )
        })}
      </tbody>
    </Table>
  </div>
);

export default InvoiceList
