import { SET_CURRENT_USER, ADD_REVIEW_INFO, AUTHENTICATING_USER, LOADING_INFORMATION, ADD_PROJECT_INFO, FAILED_LOGIN, LOGOUT } from './types';
import FlatbookAdapter from '../api/Adapter'
import history from '../history';

export function loginUser(username, password) {
  return dispatch => {
    dispatch(authenticatingUser())
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepct: 'application/json'
      },
      body: JSON.stringify({user: { username, password } })
    })
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw response
      }
    })
    .then(({user, jwt}) => {
      if (!!user) {
      localStorage.setItem('jwt', jwt)
      dispatch(setCurrentUser(user))
      }
    })
    .catch(r => r.json().then(e => {
      return dispatch(failedLogin(e.message))}))

    // .then(response => response.json())
    // .then(({user, jwt}) => {
    //   localStorage.setItem('jwt', jwt)
    //   dispatch(setCurrentUser(user))
    // })
  }
}

export const signUpUser = (username, password) => {
  return dispatch => {
    dispatch(authenticatingUser())
    fetch('http://localhost:3000/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepct: 'application/json'
      },
      body: JSON.stringify({user: { username, password } })
    })
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw response
      }
    })
    .then(({user, jwt}) => {
      if (!!user) {
      localStorage.setItem('jwt', jwt)
      dispatch(setCurrentUser(user))
      }
    })
    .catch(r => r.json().then(e => {
      return dispatch(failedLogin(e.error))}))
  }
}

export const fetchCurrentUser = () => {
  return dispatch => {
    dispatch(loadingInformation())
    fetch('http://localhost:3000/api/v1/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(response => response.json())
    .then(({ user }) => dispatch(setCurrentUser(user)))
  }
}

export const retrieveReviews = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
    },
  }
  return dispatch => {
    fetch('http://localhost:3000/api/v1/reviews', config)
    .then(response => response.json())
    .then((data) => dispatch(updateReviewInfo(data)))
  }
}

export const updateUser = (userID, user) => {
  const config = {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }
  return dispatch => {
  dispatch(loadingInformation())
  fetch(`http://localhost:3000/api/v1/users/${userID}`, config)
  .then(res => res.json())
  .then(({user}) => dispatch(setCurrentUser(user)))
  .then(history.push('/home'))
  }
}

export const updateReviews = (review) => {
  const config = {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify(review)
}
return dispatch => {
  dispatch(loadingInformation())
  fetch('http://localhost:3000/api/v1/reviews', config)
  .then(res => res.json())
  .then((data) => dispatch(updateReviewInfo(data)))
  }
}

export const addReviewLike = (userID, reviewID) => {
  return dispatch => {
  fetch('http://localhost:3000/api/v1/review_likes', {
    method: 'POST',
    headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({user_id: userID, review_id: reviewID})
  })
  .then(res => {
    if(res.ok) {
      return res.json() }})
  .then(reviews => {
    if(!!reviews) {
    return dispatch(updateReviewInfo(reviews))}
  })
  }
}

export const addComment = (userID, reviewID, reviewBody) => {
  return dispatch => {
  fetch('http://localhost:3000/api/v1/comments', {
    method: 'POST',
    headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({user_id: userID, review_id: reviewID, body: reviewBody})
  })
  .then(res => res.json())
  .then(reviews => dispatch(updateReviewInfo(reviews)))
  }
}


export const retrieveProjects = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
    },
  }
  return dispatch => {
    fetch('http://localhost:3000/api/v1/projects', config)
    .then(response => response.json())
    .then((data) => dispatch(updateProjectInfo(data)))
  }
}

export const addProject = (project) => {
  const config = {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify(project)
}
return dispatch => {
  dispatch(loadingInformation())
  fetch('http://localhost:3000/api/v1/projects', config)
  .then(res => res.json())
  .then((data) => dispatch(updateProjectInfo(data)))
  }
}

export const logoutUser = () => {
  return { type: LOGOUT }
}


export const setCurrentUser = userData => ({
  type: SET_CURRENT_USER,
  payload: userData
})

export const updateReviewInfo = reviewData => ({
  type: ADD_REVIEW_INFO,
  payload: reviewData
})

export const updateProjectInfo = projectData => ({
  type: ADD_PROJECT_INFO,
  payload: projectData
})

export const authenticatingUser = () => ({ type: AUTHENTICATING_USER})

export const loadingInformation = () => ({ type: LOADING_INFORMATION})

export const failedLogin = errorMsg => ({
  type: FAILED_LOGIN,
  payload: errorMsg
})

// export const updatingReviews = () => ({
//   type: UPDATE_REVIEWS,
//   payload: reviewData
// })



// export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })
