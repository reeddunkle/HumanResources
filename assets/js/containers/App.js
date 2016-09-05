import 'bootstrap/dist/css/bootstrap.css';

import React from 'react'
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import Loading from '../components/Loading';
import VisibleItemList from './VisibleItemList';


const App = ({ displayItems }) => (
    <div>
      <NavBar />
      {displayItems.isLoading ?
        <Loading /> :
        (<div>
          <VisibleItemList />
        </div>)
      }
    </div>
);

const mapStateToProps = (state) => {
  return { displayItems: state.displayItems };
}

export default connect(mapStateToProps)(App);
