import React from 'react';
import { connect } from 'react-redux'
import { saveState } from '../actions'

let SaveButton = ({ serverState, save }) => {

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

SaveButton = connect(mapStateToProps, mapDispatchToProps)(SaveButton)

export default SaveButton;