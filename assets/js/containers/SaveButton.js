import React from 'react';
import { connect } from 'react-redux'
import { saveState } from '../actions/actions'

let SaveButton = ({ serverState, save }) => {
  console.log("SaveButton rendering");
  return (
    <div>
      <button onClick={save}>Save Session</button>
      {serverState}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { serverState: state.serverState }
}

const mapDispatchToProps = (dispatch) => {
  return { save: () => dispatch(saveState()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton)
