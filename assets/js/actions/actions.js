import axios from 'axios'
import * as types from './actionTypes'

function postState(todos) {
  return axios.post("/save", todos);
}

let nextJobId = 0
export const addJob = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

function requestData() {
  return {type: types.REQ_DATA}
};

function receiveData(json) {
  return{
    type: types.RECV_DATA,
    data: json
  }
};

function receiveError(json) {
  return {
    type: types.RECV_ERROR,
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

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
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
    return postState(getState().todos)
      .then(
        ok => dispatch(stateSaved())
      )
      .catch(
        error => dispatch(stateSaveError())
      )
  }
}