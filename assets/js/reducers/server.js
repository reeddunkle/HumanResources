const serverState = (state = 'pristine', action) => {
  switch(action.type) {
    case 'STATE_SAVE_REQUESTED':
      return 'pending';
    case 'STATE_SAVED':
      return 'saved';
    case 'STATE_SAVE_ERROR':
      return 'error';
    default:
      return state;
  }
}

export default serverState;