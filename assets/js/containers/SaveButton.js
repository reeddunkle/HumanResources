import { Button } from 'react-bootstrap';

import React from 'react';
import { connect } from 'react-redux'
import { saveState } from '../actions/actions'

const SaveButton = ({ serverState, save }) => (
  <div>
    <Button
      bsStyle="primary"
      bsSize="small"
      onClick={save}
    >Save Session</Button>
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
