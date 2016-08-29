import axios from 'axios'

function postState(jobs) {
  return axios.post("/api/jobs", jobs);
}

let nextJobId = 0
export const addJob = (text) => {
  return {
    type: 'ADD_JOB',
    id: nextJobId++,
    text
  }
}

function requestData() {
  return {type: 'REQ_DATA'}
};

function receiveData(json) {
  return{
    type: 'RECV_DATA',
    data: json
  }
};

export const fetchData = (url) => {
  return (dispatch) => {
    dispatch(requestData());
    return axios({
      url: url,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    })
      .then((response) => {
        dispatch(receiveData(response.data));
      })
      .catch((response) => {
        dispatch(receiveError(response.data));
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