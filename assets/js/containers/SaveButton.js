import React from 'react';
import { connect } from 'react-redux'
import { saveState } from '../actions/actions'

const SaveButton = ({ serverState, save }) => (
  <div>
    <button onClick={save}>Save Session</button>
    {serverState}
  </div>
);


const mapStateToProps = (state) => (
  { serverState: state.serverState }
);


const mapDispatchToProps = (dispatch) => (
  { save: () => dispatch(saveState()) }
);

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton)
