import { combineReducers } from 'redux'

const dataReducer = (
  state = {
    isLoading: false,
    data: [],
    error: false
  }, action = null) => {
    switch(action.type) {
      case 'RECV_ERROR':
        return Object.assign({}, state, {isLoading: false, data: action.data, error: true});
      case 'RECV_DATA':
        return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
      case 'REQ_DATA':
        return Object.assign({}, state, {isLoading: true, error: false });
      default:
        return state;
  }
}

export default dataReducer;