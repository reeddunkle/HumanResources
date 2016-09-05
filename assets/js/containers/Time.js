import { Button } from 'react-bootstrap';

import React from 'react'
import { connect } from 'react-redux';
import { msToISO } from '../actions/toolkit';
import { deleteTime } from '../actions/actions';

const Time = ({ time, deleteTime }) => (
  <tr>
    <td width="35">
      <Button
        bsSize="xs"
        bsStyle="danger"
        onClick={e => {
          deleteTime()
        }}
      >X</Button>
    </td>
    <td>{msToISO(time.id)}</td>
    <td>{time.title}</td>
    <td>{time.minutes}</td>
    <td>{time.summary}</td>
  </tr>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { time } = ownProps;
  return (
    {
      deleteTime: () => {dispatch(deleteTime(time.id))}
    }
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Time);
