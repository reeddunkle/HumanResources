import React from 'react';

import { Link } from 'react-router';
import { connect } from 'react-redux';
import FilterLink from './FilterLink';
import SaveButton from './SaveButton';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <nav className='navbar navbar-inverse navbar-static-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link className='navbar-brand' to='/'>Human Resources</Link>
          </div>
          <div id='navbar'>
            <ul className='nav navbar-nav'>
              <li><FilterLink filter="SHOW_JOBS">Jobs</FilterLink></li>
              <li><FilterLink filter="SHOW_TIME">Time</FilterLink></li>
              <li><FilterLink filter="SHOW_INVOICES">Invoices</FilterLink></li>
              <li><SaveButton>Save Session</SaveButton></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};

// export default NavBar;
export default (NavBar);