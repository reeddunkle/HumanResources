import React from 'react';

// import { Link } from 'react-router';
import { connect } from 'react-redux';
import FilterLink from '../containers/FilterLink';
import SaveButton from '../containers/SaveButton';

const divStyle = {
  color: 'white',
};

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log("NavBar rendering");
    return (
      <nav className='navbar navbar-inverse navbar-static-top'>
        <div className='container-fluid'>
          <div id='navbar' style={divStyle}>
            <ul className='nav navbar-nav'>
              <li><FilterLink filter="SHOW_JOBS">Jobs</FilterLink></li>
              <li><FilterLink filter="SHOW_TIME">Time</FilterLink></li>
              <li><FilterLink filter="SHOW_INVOICES">Invoices</FilterLink></li>
              <li><SaveButton /></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default NavBar;
