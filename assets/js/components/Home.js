import React from 'react';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log("In home");
    return (
      <div className='container'>
        <h2>Welcome to Human Resources!</h2>
      </div>
    )
  }
};

export default Home;