const job = (state, action) => {
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
      return state.map(j => job(j, action));
    case 'RECV_DATA':
      if (action.subject === 'fetchData') {
        return Object.assign({}, state, action.data)
      } else if (action.subject === 'addJob') {
        var newJob = {};
        newJob[action.data.title] = action.data;
        return Object.assign({}, state, newJob)
      } else {
        return state;
      }
    case 'REQ_DATA':
      console.log("DATA REQUESTED --------------");
    case 'RECV_ERROR':
      return Object.assign({}, state, {data: action.data, error: true});

    default:
      return state;
  }
};

export default jobsReducer