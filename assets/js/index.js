import React from 'react';
import { render } from 'react-dom'
import configureStore from './store'
import Root from './components/Root'

let store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
)
