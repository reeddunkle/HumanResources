import React from 'react'

class Time extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {time, onItemClick} = this.props;

    return (
      <tr onClick={onItemClick}>
        <td>{time.date}</td>
        <td>{time.title}</td>
        <td>{time.minutes}</td>
        <td>{time.summary}</td>
      </tr>
    )
  }
};

export default Time