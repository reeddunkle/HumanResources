import { Table } from 'react-bootstrap';

import React from 'react'

const round2 = (n) => {
  return parseFloat(n.toFixed(2));
}

const Invoice = ({ total_minutes, hourly_rate, tax_rate }) => {
  var subtotal = round2(hourly_rate * (total_minutes/60));
  var tax = round2(subtotal * tax_rate);
  var total = round2(subtotal - tax);

  if (!subtotal || !tax || !total) {
    subtotal = tax = total = '';
  }

  console.log("Invoice Component");
  console.log("------------------");
  console.log("total_minutes: ", total_minutes);
  console.log("hourly_rate: ", hourly_rate);
  console.log("tax_rate: ", tax_rate);
  console.log("subtotal: ", subtotal);
  console.log("tax: ", tax);
  console.log("total: ", total);

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

export default Invoice;
