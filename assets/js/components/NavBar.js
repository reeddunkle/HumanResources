import React from 'react';

import { Link } from 'react-router';
import { connect } from 'react-redux';
import FilterLink from '../containers/FilterLink';
import SaveButton from '../containers/SaveButton';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <nav className='navbar navbar-inverse navbar-static-top'>
        <div className='container-fluid'>
          <div id='navbar'>
            <ul className='nav navbar-nav'>
              <li><FilterLink filter="SHOW_JOBS">Jobs</FilterLink></li>
              <li><FilterLink filter="SHOW_TIME">Time</FilterLink></li>
              <li><FilterLink filter="SHOW_INVOICES">Invoices</FilterLink></li>
              <li><SaveButton />
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};

export default NavBar;
