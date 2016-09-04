const item = (state, action) => {
  switch (action.type) {
    case 'ADD_JOB':
      return {
        title: action.title,
        hourly_rate: action.hourly,
        tax_rate: action.tax
      };
    case 'ADD_TIME':
      var d = new Date();
      var id = d.getTime();
      var date = d.toISOString().split('T')[0];
      return {
        id: id,
        object: {
          date: date,
          title: action.title,
          minutes: action.minutes,
          summary: action.summary
        }
      };
    default:
      return state;
  }
}

const defaultState = {
  error: false,
  isLoading: false,
  data: {
    jobs: {},
    time: {}
  }
};

const itemsReducer = (state=defaultState, action=null) => {
  switch (action.type) {
    case 'ADD_JOB':
      // Create local copy of state data to mutate
      var jobsState = {...state.data.jobs};
      var newJob = item(undefined, action);
      jobsState[newJob.title] = newJob;
      var newDataState = {...state.data, jobs: jobsState};
      return {
        ...state,
        error: false,
        isLoading: false,
        data: newDataState
      };

    case 'ADD_TIME':
      // Create local copy of state data to mutate
      var timeState = {...state.data.time};
      var newTime = item(undefined, action);
      timeState[newTime.id] = newTime.object;
      var newDataState = {...state.data, time: timeState};
      return {
        ...state,
        error: false,
        isLoading: false,
        data: newDataState
      };

    case 'REQ_DATA':
      return {
        ...state,
        isLoading: true
      };

    case 'RECV_ERROR':
      console.log("Server Error");
      return {
        ...state,
        isLoading: false
      };

    case 'RECV_DATA':
      console.log("itemsReducer action: ", action)
      console.log("itemsReducer data: ", action.data)
      let returnState = {
        ...state,
        error: false,
        isLoading: false,
        data: action.data
      };
      console.log("RECV_DATA return state: ", returnState);
      return returnState;

    default:
      return state;
  }
};

export default itemsReducer
