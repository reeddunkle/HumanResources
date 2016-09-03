const item = (state, action) => {
  switch (action.type) {
    case 'ADD_JOB':
      return {
        title: action.title,
        hourly_rate: action.hourly,
        tax_rate: action.tax
      }
    case 'TOGGLE_EDIT':
      if (state.title !== action.title) {
        return Object.assign({}, state, {toEdit: false});
      }

      return Object.assign({}, state, {toEdit: !state.toEdit});

    default:
      return state;
  }
}

const defaultState = {
  jobs: {},
  time: {}
};

const itemsReducer = (state=defaultState, action=null) => {
  switch (action.type) {
    case 'ADD_JOB':
      let newJob = item(undefined, action);
      let oldJobsState = {...state.jobs};
      oldJobsState[action.title] = newJob;
      let newJobsState = {...oldJobsState}
      return {...state, jobs: newJobsState};

    case 'ADD_TIME':
      let newTime = item(undefined, action);
      let oldTimeState = {...state.time};
      oldTimeState[action.title] = newTime;
      let newTimeState = {...oldTimeState}
      return {...state, time: newTimeState};

    case 'TOGGLE_EDIT':
      return state.map(j => job(j, action));

    case 'RECV_JOBS':
      let jobs = action.data;
      return {...state, jobs: jobs};

    case 'RECV_TIME':
      let time = action.data;
      return {...state, time: time};

    case 'RECV_ERROR':
      console.log("Server Error");
      return {};

    case 'RECV_DATA':
      console.log("jobsReducer action: ", action)
      console.log("jobsReducer data: ", action.data)
      var returnState = Object.assign({}, state, action.data);
      console.log("RECV_DATA return state: ", returnState);
      return returnState;

    default:
      return state;
  }
};

export default itemsReducer
