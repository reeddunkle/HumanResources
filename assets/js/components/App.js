import React, { PropTypes } from 'react'
import Router, { Link } from 'react-router';
import { connect } from 'react-redux';
import Home from './Home';
import NavBar from '../components/NavBar';
import JobBox from './JobBox'
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {children, app } = this.props;
    console.log(children, app);

    return (
      <div>
        <NavBar />
        <div className='container'>
          {children}
        </div>
      </div>
    );
  }
}

export default App
