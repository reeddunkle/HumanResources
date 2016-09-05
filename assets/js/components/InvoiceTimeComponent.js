import React from 'react';
import { msToISO } from '../actions/toolkit';

const InvoiceTime = ({ time }) => (
  <tr>
    <td>{msToISO(time.id)}</td>
    <td>{time.title}</td>
    <td>{time.minutes}</td>
    <td>{time.summary}</td>
  </tr>
);

export default InvoiceTime;
