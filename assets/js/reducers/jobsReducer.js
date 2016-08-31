const job = (state, action) => {
  switch (action.type) {
    case 'ADD_JOB':
      return {
        title: action.title,
        hourly_rate: action.hourly_rate,
        tax_rate: action.tax_rate,
        toUpdate: action.toUpdate,
        toDelete: action.toDelete
      };
    case 'TOGGLE_DELETE':
      if (state.title !== action.title) {
        return state;
      }

      return Object.assign({}, state, {
        toDelete: !state.toDelete
      })
    case 'TOGGLE_UPDATE':
      if (state.title !== action.title) {
        return state;
      }

      return Object.assign({}, state, {
        toUpdate: !state.toUpdate
      })
    default:
      return state;
  }
}

const jobsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_JOB':
      return [
        ...state,
        job(undefined, action)
      ];
    case 'TOGGLE_DELETE':
      return state.map(j => job(j, action));
    case 'RECV_DATA':
      console.log("In reducer: ", action.data);
      if (action.subject === 'fetchData') {
        return Object.assign({}, state, action.data)
      } else if (action.subject === 'addJob') {
        var newItem = {};
        newItem[action.data.id] = action.data
        return Object.assign({}, state, newItem)
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default jobsReducer