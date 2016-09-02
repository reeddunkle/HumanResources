const serverState = (state ='', action) => {
  switch(action.type) {
    case 'STATE_SAVE_REQUESTED':
      return 'State: saving';
    case 'STATE_SAVED':
      return 'State: saved';
    case 'STATE_SAVE_ERROR':
      return 'Server error';
    default:
      return state;
  }
}

export default serverState;