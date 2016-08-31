import axios from 'axios'

function postState(jobs) {
  return axios.post("/api/jobs", jobs);
}

export const addJob = (title, hourly, tax) => {
  return (dispatch) => {
    dispatch(requestData("addJob"));
    return axios({
      url: "/api/jobs",
      timeout: 20000,
      method: 'post',
      responseType: 'json'
    },
    {id: title, hourly_rate: hourly, tax_rate: tax})
      .then((response) => {
        dispatch(receiveData(response.data, "addJob"));
      })
      .catch((response) => {
        dispatch(receiveError(response.data, "addJob"));
      })
  }
};

function requestData(subject) {
  return {type: 'REQ_DATA', subject: subject}
};

function receiveError(json, subject) {
  return{
    type: 'RECV_ERR',
    data: json,
    subject: subject
  }
};

function receiveData(json, subject) {
  return{
    type: 'RECV_DATA',
    data: json,
    subject: subject
  }
};

export const fetchData = (url) => {
  console.log(2, "AC Called:");
  return (dispatch) => {
    console.log(3, "Dispatching Data Request");
    dispatch(requestData("fetchData"));
    return axios({
      url: url,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    })
      .then((response) => {
        console.log("4a", "Data Found:", response.data);
        dispatch(receiveData(response.data, "fetchData"));
      })
      .catch((response) => {
        console.log("4b", "Data Error:", response.data);
        dispatch(receiveError(response.data, "fetchData"));
      })
  }
};

export const loadJobs = (url) => {
  let output
  fetch(url).then((response) => {
    return response.json();
  })
  .then((data) => {
    output = data;
  });
  return output;
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleJob = (id) => {
  return {
    type: 'TOGGLE_JOB',
    id
  }
}

function stateSaved() {
  return {
    type: 'STATE_SAVED'
  }
}

function stateSaveError() {
  return {
    type: 'STATE_SAVE_ERROR'
  }
}

function stateSaveStart() {
  return {
    type: 'STATE_SAVE_REQUESTED'
  }
}

export const saveState = () => {
  return (dispatch, getState) => {
    dispatch(stateSaveStart());
    return postState(getState().jobs)
      .then(
        ok => dispatch(stateSaved())
      )
      .catch(
        error => dispatch(stateSaveError())
      )
  }
}