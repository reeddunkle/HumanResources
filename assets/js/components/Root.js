import React from 'react';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from './App';
import InvoiceList from './InvoiceList'
import JobList from './JobList'
import TimeList from './TimeList'
import Home from './Home'
import {fetchData} from '../actions/actions'

const history = new createBrowserHistory();

const loadJobs = () => {
  store.dispatch(fetchData('/api/jobs'));
}
const loadTime = () => {
  store.dispatch(fetchData('/api/time'));
}
const loadInvoices = () => {
  store.dispatch(fetchData('/api/invoices'));
}

const Root = ({ store }) =>  (
  <Provider store={store}>
    <ReduxRouter>
      <Route history={history}>
        <Route component={App}>
          <Route path='/' component={Home} />
          <Route path='/jobs' component={JobList} onEnter={loadJobs} />
          <Route path='/time' component={TimeList} onEnter={loadTime} />
          <Route path='/invoices' component={InvoiceList} onEnter={loadInvoices} />
        </Route>
      </Route>
    </ReduxRouter>
  </Provider>
)

export default Root
