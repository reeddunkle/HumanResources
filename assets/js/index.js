import React from 'react';
import { render } from 'react-dom'
import configureStore from './store'
import Root from './components/Root'
import { fetchData } from './actions/actions'

let store = configureStore();



console.log("Initial store ", store);

render(
  <Root store={store} />,
  document.getElementById('root')
)
