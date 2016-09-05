import { Button } from 'react-bootstrap';

import React from 'react';
import { connect } from 'react-redux';
import { deleteJob } from '../actions/actions';

const Job = ({ job, deleteJob }) => (
  <tr>
    <td width="35">
      <Button
        bsSize="xs"
        bsStyle="danger"
        onClick={e => {
          deleteJob()
        }}
      >X</Button>
    </td>
    <td>{job.title}</td>
    <td>{job.hourly_rate}</td>
    <td>{job.tax_rate}</td>
  </tr>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { job } = ownProps;
  return (
    {
      deleteJob: () => {dispatch(deleteJob(job.title))}
    }
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Job);
