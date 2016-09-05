import React from 'react';
import { Provider } from 'react-redux'
import App from '../containers/App';


const Root = ({ store, loadData }) => (
  <Provider store={store}>
    <App loadData={loadData} />
  </Provider>
)

export default Root
