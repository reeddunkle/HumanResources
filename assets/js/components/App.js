import React, { PropTypes } from 'react'
import Router, { Link } from 'react-router';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import JobBox from './JobBox'


// @connect(state => ({routerState: state.router, app: state.app }))
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {children} = this.props;
    const {app} = this.props;

    return (
      <div>
        <NavBar />
        <div className='container'>
          {children}
        </div>
      </div>
    );
  }
}

// export default App
export default connect(state => ({routerState: state.router, app: state.app }))(App)