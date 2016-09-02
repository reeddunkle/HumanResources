import React from 'react';

import { Link } from 'react-router';
import { connect } from 'react-redux';
import FilterLink from './containers/FilterLink'

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
              <li><Link to='/jobs'>Jobs</Link></li>
              <li><Link to='/time'>Time Log</Link></li>
              <li><Link to='/invoices'>Invoices</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};

import React from 'react'
import FilterLink from './containers/FilterLink'
import SaveButton from './containers/SaveButton'

const Footer = () => (
  <div>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
    <SaveButton />
  </div>
)

// export default NavBar;
export default connect(state => ({routerState: state.router}))(NavBar);