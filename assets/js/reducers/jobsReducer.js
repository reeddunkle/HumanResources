const item = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_EDIT':
      if (state.title !== action.title) {
        return Object.assign({}, state, {toEdit: false});
      }

      return Object.assign({}, state, {toEdit: !state.toEdit});

    default:
      return state;
  }
}

const jobsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_EDIT':
      return state.map(j => item(j, action));
    case 'RECV_DATA':
      if (action.subject === 'fetchData') {
        return Object.assign({}, state, action.data)
      } else if (action.subject === 'addJob') {
        var newItem = {};
        newItem[action.data.title] = action.data;
        return Object.assign({}, state, newItem)
      } else {
        return state;
      }
    case 'RECV_ERROR':
      return Object.assign({}, state, {data: action.data, error: true});

    default:
      return state;
  }
};

export default jobsReducer