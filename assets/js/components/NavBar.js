import React from 'react';

import { Link } from 'react-router';
import { connect } from 'react-redux';

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

// export default NavBar;
export default connect(state => ({routerState: state.router}))(NavBar);