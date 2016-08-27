import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute } from 'react-router'
import thunk from 'redux-thunk'
import jobsApp from './reducers'
import App from './components/App'
import InvoiceList from './components/InvoiceList';

let store = createStore(jobsApp, applyMiddleware(thunk));

const loadData = (url) => {
  store.dispatch(fetchData(url));
}

const loadJobs = () => (
  loadData('/api/jobs')
)

const loadTime = () => (
  loadData('/api/time')
)

render(
  <App />,
  document.getElementById('root')
)

// render(
//   <Provider store={store}>
//     <ReduxRouter>
//       <Route component={App}>
//         <Route path='/' component={InvoiceList} onEnter={loadInvoices} />
//         <Route path='/jobs' component={JobList} onEnter={loadJobs} />
//         <Route path='/time' component={TimeList} onEnter={loadTime} />
//       </Route>
//      </ReduxRouter>
//    </Provider>,
//   document.getElementById('root')
// )
