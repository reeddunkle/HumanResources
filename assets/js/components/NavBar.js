import { Navbar, Nav } from 'react-bootstrap';

import React from 'react';
import FilterLink from '../containers/FilterLink';
import SaveButton from '../containers/SaveButton';

const NavBar = () => (
  <Navbar inverse>
    <Nav>
      <FilterLink filter="SHOW_HOME">Human Resources</FilterLink>
      <FilterLink filter="SHOW_JOBS">Jobs</FilterLink>
      <FilterLink filter="SHOW_TIME">Time</FilterLink>
      <FilterLink filter="SHOW_INVOICES">Invoices</FilterLink>
    </Nav>
      <SaveButton />
  </Navbar>
)

export default NavBar;
