import React from 'react';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './App';
import InvoiceList from './InvoiceList'
import JobBox from '../containers/JobBox'
import TimeList from '../containers/TimeList'
import Home from './Home'

// class Root extends React.Component {
//   constructor(props) {
//     super(props);
//     this.store = this.props.store;
//     this.loadData = this.props.loadData;
//   }

//   componentWillMount() {
//     this.loadData();
//     console.log("Root rendering. Current state: ", this.store.getState())
//   }

//   render() {
//     return (
//       <Provider store={this.store}>
//         <App />
//       </Provider>
//     );
//   };
// };

const Root = ({ store, loadData }) => (
  <Provider store={this.store}>
    <App />
  </Provider>
)

// <Route path='/jobs' component={JobList} onEnter={loadJobs} />
// <Route path='/time' component={TimeList} onEnter={loadTime} />
// <Route path='/invoices' component={InvoiceList} onEnter={loadInvoices} />

export default Root
