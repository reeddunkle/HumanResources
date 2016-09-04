import { NavItem } from 'react-bootstrap';

import React, { PropTypes } from 'react'

const Link = ({ children, onClick }) => (
    <NavItem
      href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
      eventKey={children}
    >
      {children}
    </NavItem>
);


Link.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link;
