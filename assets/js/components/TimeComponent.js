import React from 'react'

class Time extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {time, onClick} = this.props;

    return (
      <tr onClick={onClick}>
        <td>{time.date}</td>
        <td>{time.title}</td>
        <td>{time.minutes}</td>
        <td>{time.summary}</td>
      </tr>
    )
  }
};

export default Time