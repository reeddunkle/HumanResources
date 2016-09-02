import React, { PropTypes } from 'react'
// import Router, { Link } from 'react-router';
// import { connect } from 'react-redux';
// import Home from './Home';
import NavBar from '../containers/NavBar';
// import JobBox from './JobBox'
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    console.log("App component children and app", children, app);

    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App
