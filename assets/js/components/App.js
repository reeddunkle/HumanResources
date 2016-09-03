import React, { PropTypes } from 'react'
// import Router, { Link } from 'react-router';
import { connect } from 'react-redux';
// import Home from './Home';
import NavBar from './NavBar';
// import JobBox from './JobBox'
import 'bootstrap/dist/css/bootstrap.css';
import DisplayItems from './DisplayItems';

const mapStateToProps = (state) => {
  console.log("State in App", state)
  return { displayItems: state.displayItems }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { displayItems, loadData } = this.props;
    console.log("App props", this.props);
    return (
      <div>
        <NavBar displayItems={displayItems} />
        <DisplayItems loadData={loadData} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
