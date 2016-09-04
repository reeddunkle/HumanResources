import 'bootstrap/dist/css/bootstrap.css';

import React from 'react'
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Loading from './Loading';
import VisibleItemList from '../containers/VisibleItemList';
import SaveButton from '../containers/SaveButton';


const mapStateToProps = (state) => {
  console.log("App MSTP", state);
  return { displayItems: state.displayItems };
}


const App = ({ displayItems }) => (
    <div>
      <NavBar />
      {displayItems.isLoading ?
        <Loading /> :
        (<div>
          {' '}<SaveButton />
          <VisibleItemList />
        </div>)
      }
    </div>
);

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const { displayItems } = this.props;
//     console.log("App props", this.props);
//     if (displayItems.isLoading) {
//       console.log("Loading...");
//     }
//     return (
//       <div>
//         <NavBar />
//         {displayItems.isLoading ?
//           <Loading /> :
//           (<div>
//             {' '}<SaveButton />
//             <VisibleItemList />
//           </div>)
//         }
//       </div>
//     );
//   }
// }

export default connect(mapStateToProps)(App);
