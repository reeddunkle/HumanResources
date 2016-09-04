import { DropdownButton, MenuItem } from 'react-bootstrap';

import React from 'react';

const Dropdown = ({ dropDownOptions, onClick, title }) => {
  var options = dropDownOptions.map(option => {
    return (
      <MenuItem eventKey={option} key={option}>
        {option}
      </MenuItem>
    );
  });

  return (
    <div>
      <DropdownButton
        title={title}
        id="dropdown"
        onSelect={(e) => {
          onClick(e);
        }}
      >
        {options}
      </DropdownButton>
    </div>
  );
};

export default Dropdown;
