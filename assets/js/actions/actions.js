import axios from 'axios'



function requestData() {
  return {type: 'REQ_DATA'}
};

function receiveError(json, subject) {
  return {
    type: 'RECV_ERR',
    data: {},
    subject: subject
  }
};

function receiveData(json, subject) {
  return {
    type: 'RECV_DATA',
    data: json
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleEdit = (id) => {
  return {
    type: 'TOGGLE_EDIT',
    id
  }
}

function stateSaveError() {
  return {
    type: 'STATE_SAVE_ERROR'
  }
}

function stateSaved() {
  return {
    type: 'STATE_SAVED'
  }
}

function stateSaveStart() {
  return {
    type: 'STATE_SAVE_REQUESTED'
  }
}

export const addJob = (title, hourly, tax) => {
  return {
    type: 'ADD_JOB',
    title,
    hourly,
    tax
  }
}

export const addTime = (title, minutes, summary) => {
  return {
    type: 'ADD_TIME',
    title,
    minutes,
    summary
  }
}

let csrfToken = getCookie('csrftoken');
export const saveState = () => {
  console.log(2, 'saveState AC called');
  return (dispatch, getState) => {
    dispatch(stateSaveStart());
    console.log(3, "Dispatching saveState");
    return axios({
      method: 'post',
      url: '/api/data',
      data: getState().displayItems.data,
      headers: {"X-CSRFToken": csrfToken},
      responseType: 'json'
    })
      .then((response) => {
        console.log("4a SUCCESS Reponse data ", response.data)
        dispatch(stateSaved());
      })
      .catch((response) => {
        console.log("4b ERROR Reponse data ", response.data)
        dispatch(stateSaveError());
      })
  }
}



export const fetchData = () => {
  console.log(2, 'AC Called:');
  return (dispatch) => {
    console.log(3, 'Dispatching Data Request');
    dispatch(requestData());
    return axios({
      url: "/api/data",
      method: 'get'
    })
      .then((response) => {
        console.log('4a', 'Data Found:', response.data);
        dispatch(receiveData(response.data));
      })
      .catch((response) => {
        console.log('4b', 'Data Error:', response.data);
        dispatch(receiveError(response.data));
      })
  }
};

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}




// export const addJob = (title, hourly, tax) => {
//   return (dispatch) => {
//     return axios({
//       method: 'post',
//       url: "/api/jobs",
//       data: {
//         "title": title,
//         "hourly_rate": hourly,
//         "tax_rate": tax
//       },
//       headers: {"X-CSRFToken": csrfToken},
//       responseType: 'json'
//     })
//       .then((response) => {
//         console.log("SUCCESS Reponse data ", response.data)
//         dispatch(receiveData(response.data, "addJob"));
//       })
//       .catch((response) => {
//         console.log("ERROR Reponse data ", response.data)
//         dispatch(receiveError(response.data, "addJob"));
//       })
//   }
// };


// export const loadJobs = () => {
//   return fetchData('/api/jobs', 'JOBS')
// }

// export const loadTime = () => {
//   return fetchData('/api/time', 'TIME')
// }

// export const delData = (url, id) => {
//   console.log(2, "AC Called:");
//   return (dispatch) => {
//     console.log(3, "Dispatching Data DELETE Request");
//     return axios({
//       url: url,
//       method: 'delete',
//       data: {id: id},
//       headers: {"X-CSRFToken": csrfToken}
//     })
//       .then((response) => {
//         console.log("4a", "Data DELETE Found:", response.data);
//         dispatch(receiveData(response.data, "delData"));
//       })
//       .catch((response) => {
//         console.log("4b", "Data DELETE Error:", response.data);
//         dispatch(receiveError(response.data, "delData"));
//       })
//   }
// };


