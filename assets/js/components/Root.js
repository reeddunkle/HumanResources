import React from 'react';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './App';
import InvoiceList from './InvoiceList'
import JobBox from '../containers/JobBox'
import TimeList from '../containers/TimeList'
import Home from './Home'

class Root extends React.Component => {
  constructor() {
    super(props);
  }

  render() {
    const { store, loadItems } = this.props;
    loadItems();
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };
};

// <Route path='/jobs' component={JobList} onEnter={loadJobs} />
// <Route path='/time' component={TimeList} onEnter={loadTime} />
// <Route path='/invoices' component={InvoiceList} onEnter={loadInvoices} />

export default Root
