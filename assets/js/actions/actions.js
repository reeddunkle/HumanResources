import axios from 'axios'



function postState(jobs) {
  return axios.post("/api/jobs", jobs);
}

function receiveError(json, subject) {
  return {
    type: 'RECV_ERR',
    data: json,
    subject: subject
  }
};

function receiveData(json, subject) {
  return {
    type: 'RECV_DATA',
    data: json,
    subject: subject
  }
};


export const saveState = (state, filter) => {
  switch (filter) {
    case 'SHOW_JOBS':
      return saveJobs(dispatch, getState)
    case 'SHOW_TIME':
      return saveTime(dispatch, getState)
    default:
      return {}
  }
}

let csrfToken = getCookie('csrftoken');
function saveJobs(dispatch, getState) {
  return axios({
    method: 'post',
    url: '/api/jobs',
    data: getState().displayItems.jobs,
    headers: {"X-CSRFToken": csrfToken},
    responseType: 'json'
    })
    .then((response) => {
      console.log("SUCCESS Reponse data ", response.data)
      dispatch(receiveData(response.data, "addJob"));
    })
    .catch((response) => {
      console.log("ERROR Reponse data ", response.data)
      dispatch(receiveError(response.data, "addJob"));
    })
  }
}

function saveTime(dispatch, getState) {
  return axios({
    method: 'post',
    url: '/api/time',
    data: getState().displayItems.time,
    headers: {"X-CSRFToken": csrfToken},
    responseType: 'json'
    })
    .then((response) => {
      console.log("SUCCESS Reponse data ", response.data)
      dispatch(receiveData(response.data, "addJob"));
    })
    .catch((response) => {
      console.log("ERROR Reponse data ", response.data)
      dispatch(receiveError(response.data, "addJob"));
    })
  }
}

export const addJob = (title, hourly, tax) => {
  return (dispatch) => {
    return axios({
      method: 'post',
      url: "/api/jobs",
      data: {
        "title": title,
        "hourly_rate": hourly,
        "tax_rate": tax
      },
      headers: {"X-CSRFToken": csrfToken},
      responseType: 'json'
    })
      .then((response) => {
        console.log("SUCCESS Reponse data ", response.data)
        dispatch(receiveData(response.data, "addJob"));
      })
      .catch((response) => {
        console.log("ERROR Reponse data ", response.data)
        dispatch(receiveError(response.data, "addJob"));
      })
  }
};


export const loadJobs = () => {
  return fetchData("/api/jobs")
}

export const loadTime = () => {
  return fetchData("/api/time")
}

const fetchData = (url) => {
  console.log(2, "AC Called:");
  return (dispatch) => {
    console.log(3, "Dispatching Data Request");
    return axios({
      url: url,
      method: 'get'
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
