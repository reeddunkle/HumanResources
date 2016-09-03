import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import NavBar from './NavBar';
import VisibleItemList from '../containers/VisibleItemList';
// import Router, { Link } from 'react-router';
// import Home from './Home';
// import JobBox from './JobBox'
import 'bootstrap/dist/css/bootstrap.css';

const mapStateToProps = (state) => {
  console.log("App MSTP", state)
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
        <VisibleItemList />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
