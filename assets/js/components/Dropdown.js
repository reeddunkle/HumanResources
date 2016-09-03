import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.value ||
      {
        label: props.placeholder || 'Select...',
        value: ''
      },
      isOpen: false
    };
  this.mounted = true;
  this.handleDocumentClick = this.handleDocumentClick.bind(this);
  this.fireChangeEvent = this.fireChangeEvent.bind(this);
  };

  componentWillReceiveProps(newProps) {
    if (newProps.value &&  newProps.value !== this.state.selected) {
      this.setState({
        selected: newProps.value
      });
    } else if (!newProps.value && newProps.placeholder) {
      this.setState({
        selected: {
          label: newProps.placeholder,
          value: ''
        }
      });
    };
  };

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    document.addEventListener('touchend', this.handleDocumentClick, false);
  };


  getInitialState() {
    return {
      active: false
    };
  };

  getDefaultProps() {
    return {
      className: ''
    };
  };

  componentDidMount() {

  }
}
class Dropdown = ({ dropDownOptions }) => {
  var options = dropDownOptions.map(option => {
    return (
      <li key={option}>
        {option}
      </li>
    );
  });

  console.log("dropDownOptions", dropDownOptions);

  return (
    <div className='dropdown'>
      <button
        className='btn btn-default dropdown-toggle'
        type='button'
        id='jobTitleDropdown'
        aria-haspopup='true'
        aria-expanded='true'
      >
        Job Titles...
        <span className='caret'></span>
      </button>
      <ul className='dropdown-menu' aria-labelledby='jobTitleDropdown'>
        {options}
      </ul>
    </div>
  );
};

export default Dropdown;