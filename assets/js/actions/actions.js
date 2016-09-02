import axios from 'axios'



function postState(jobs) {
  return axios.post("/api/jobs", jobs);
}

function receiveError(json, subject) {
  return {
    type: 'RECV_ERR',
    data: {},
    subject: subject
  }
};

function receiveData(json, subject) {
  switch (subject) {
    case 'JOBS':
      return {
        type: 'RECV_JOBS',
        data: json,
      }
    case 'TIME':
      return {
        type: 'RECV_TIME',
        data: json,
      }
    default:
      return {
        type: 'ERROR',
        data: json
      }
  }
}

// function receiveJobs(json) {
//   return {
//     type: 'RECV_JOBS',
//     data: json,
//   }
// };

// function receiveTime(json) {
//   return {
//     type: 'RECV_TIME',
//     data: json,
//   }
// };

let csrfToken = getCookie('csrftoken');
export const saveState = () => {
  return (dispatch, getState) => {
    return axios({
      method: 'post',
      url: '/api/data',
      data: getState().displayItems,
      headers: {"X-CSRFToken": csrfToken},
      responseType: 'json'
    })
      .then((response) => {
        console.log("SUCCESS Reponse data ", response.data)
        dispatch(stateSaved());
      })
      .catch((response) => {
        console.log("ERROR Reponse data ", response.data)
        dispatch(stateSaveError());
      })
  }
}

// function saveJobs(dispatch, getState) {
//   return axios({
//     method: 'post',
//     url: '/api/jobs',
//     data: getState().displayItems.jobs,
//     headers: {"X-CSRFToken": csrfToken},
//     responseType: 'json'
//     })
//     .then((response) => {
//       console.log("SUCCESS Reponse data ", response.data)
//       dispatch(receiveData(response.data, "addJob"));
//     })
//     .catch((response) => {
//       console.log("ERROR Reponse data ", response.data)
//       dispatch(receiveError(response.data, "addJob"));
//     })
// }

// function saveTime(dispatch, getState) {
//   return axios({
//     method: 'post',
//     url: '/api/time',
//     data: getState().displayItems.time,
//     headers: {"X-CSRFToken": csrfToken},
//     responseType: 'json'
//     })
//     .then((response) => {
//       console.log("SUCCESS Reponse data ", response.data)
//       dispatch(receiveData(response.data, "addJob"));
//     })
//     .catch((response) => {
//       console.log("ERROR Reponse data ", response.data)
//       dispatch(receiveError(response.data, "addJob"));
//     })
//   }
// }

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

export const fetchData = () => {
  console.log(2, 'AC Called:');
  return (dispatch) => {
    console.log(3, 'Dispatching Data Request');
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
