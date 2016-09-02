import React from 'react'

class Job extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {job, onItemClick} = this.props;

    return (
      <tr onClick={onItemClick}>
        <td>{job.title}</td>
        <td>{job.hourly_rate}</td>
        <td>{job.tax_rate}</td>
      </tr>
    )
  }
};

export default Job