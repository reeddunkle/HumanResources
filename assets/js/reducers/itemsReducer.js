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
      var date = d.getTime();
      return {
        id: date,
        object: {
          date: date,
          title: action.title,
          minutes: action.minutes,
          summary: action.summary
        }
      };
    default:
      return state;
  };
};

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

    case 'DELETE_JOB':
      var oldJobs = state.data.jobs;
      var newJobs = Object.keys(oldJobs)
        .filter(key => key !== action.title)
        .reduce((result, current) => {
          result[current] = oldJobs[current];
          return result;
      }, {});
      var newData = {...state.data, jobs: newJobs};
      return {...state, data: newData};

    case 'DELETE_TIME':
      var oldTime = state.data.time;
      var newTime = Object.keys(oldTime)
        .filter(key => key !== action.id)
        .reduce((result, current) => {
          result[current] = oldTime[current];
          return result;
      }, {});
      var newData = {...state.data, time: newTime};
      return {...state, data: newData};

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
      var returnState = {
        ...state,
        error: false,
        isLoading: false,
        data: action.data
      };
      return returnState;

    default:
      return state;
  };
};

export default itemsReducer;
