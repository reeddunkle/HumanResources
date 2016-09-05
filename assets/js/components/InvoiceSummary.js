import { Table } from 'react-bootstrap';

import React from 'react'

const InvoiceSummary = ({ total_minutes, hourly_rate, tax_rate }) => {
  var subtotal = (hourly_rate * (total_minutes/60)).toFixed(2);
  var tax = (subtotal * tax_rate).toFixed(2);
  var total = (subtotal - tax).toFixed(2);
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th width="95">Subtotal ($)</th>
            <th width="95">Tax ($)</th>
            <th width="95">TOTAL ($)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{subtotal}</td>
            <td>{tax}</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default InvoiceSummary;
