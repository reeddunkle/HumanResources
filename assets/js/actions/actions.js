import axios from 'axios'



function postState(jobs) {
  return axios.post("/api/jobs", jobs);
}

function requestData(subject) {
  return {type: 'REQ_DATA', subject: subject}
};

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


let csrfToken = getCookie('csrftoken');
export const addJob = (title, hourly, tax) => {
  return (dispatch) => {
    dispatch(requestData("addJob"));
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
        console.log("Reponse data ", response.data)
        dispatch(receiveData(response.data, "addJob"));
      })
      .catch((response) => {
        console.log("Reponse data ", response.data)
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

export const fetchData = (url) => {
  console.log(2, "AC Called:");
  return (dispatch) => {
    console.log(3, "Dispatching Data Request");
    dispatch(requestData("fetchData"));
    return axios({
      url: url,
      method: 'get',
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

// function stateSaved() {
//   return {
//     type: 'STATE_SAVED'
//   }
// }

// function stateSaveError() {
//   return {
//     type: 'STATE_SAVE_ERROR'
//   }
// }

// function stateSaveStart() {
//   return {
//     type: 'STATE_SAVE_REQUESTED'
//   }
// }

// export const saveState = () => {
//   return (dispatch, getState) => {
//     dispatch(stateSaveStart());
//     return postState(getState().jobs)
//       .then(
//         ok => dispatch(stateSaved())
//       )
//       .catch(
//         error => dispatch(stateSaveError())
//       )
//   }
// }