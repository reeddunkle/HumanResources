import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import jobsApp from './reducers'
import App from './components/App'

let store = createStore(jobsApp, applyMiddleware(thunk));

render(
  <App />,
  document.getElementById('root')
)

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
