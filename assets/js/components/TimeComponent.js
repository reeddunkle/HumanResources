import React from 'react'
import { msToISO } from '../actions/actions';

const Time = ({ time, onClick }) => {
  return (
    <tr onClick={onClick}>
      <td>{msToISO(time.id)}</td>
      <td>{time.title}</td>
      <td>{time.minutes}</td>
      <td>{time.summary}</td>
    </tr>
  );
};

export default Time;
