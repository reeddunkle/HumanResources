import React, { PropTypes } from 'react'
// import Router, { Link } from 'react-router';
import { connect } from 'react-redux';
// import Home from './Home';
import NavBar from './NavBar';
// import JobBox from './JobBox'
import 'bootstrap/dist/css/bootstrap.css';

const mapStateToProps = (state) => {
  return { displayItems: state.displayItems }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { displayItems, children } = this.props;
    console.log("App component children", children);

    return (
      <div>
        <NavBar displayItems={displayItems} />
        { children }
      </div>
    );
  }
}

export default App
