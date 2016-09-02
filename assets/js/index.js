import React from 'react';
import { render } from 'react-dom'
import configureStore from './store'
import Root from './components/Root'
import { loadJobs, loadTime } from './actions/actions'

let jobs = loadJobs();
let time = loadTime();

let initialState = {jobs, time};

let store = configureStore(initialState);



console.log("Initial store ", store);

render(
  <Root store={store} />,
  document.getElementById('root')
)
