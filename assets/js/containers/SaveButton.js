import React from 'react';
import { connect } from 'react-redux'
import { saveState } from '../actions'

let SaveButton = ({ save, filter }) => {

  return (
    <div>
      <button onClick={save(filter)}>Save</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { filter: state.visibilityFilter }
}

const mapDispatchToProps = (dispatch) => {
  return { save: (filter) => dispatch(saveState(filter)) }
}

SaveButton = connect(mapStateToProps, mapDispatchToProps)(SaveButton)

export default SaveButton;