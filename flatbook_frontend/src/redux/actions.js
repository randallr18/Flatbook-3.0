import { SET_CURRENT_USER } from './types'

export function loginUser(username, password) {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepct: 'application/json'
      },
      body: JSON.stringify({user: { username, password } })
    })
    .then(response => response.json())
    .then(({user, jwt}) => {
      localStorage.setItem('jwt', jwt)
      dispatch(setCurrentUser(user))
    })
  }
}

export const signUpUser = (username, password) => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepct: 'application/json'
      },
      body: JSON.stringify({user: { username, password } })
    })
    .then(response => response.json())
    .then(({user, jwt}) => {
      localStorage.setItem('jwt', jwt)
      dispatch(setCurrentUser(user))
    })
  }
}

// export const fetchCurrentUser = () => {
//   return dispatch => {
//     fetch()
//   }
// }


export const setCurrentUser = userData => ({
  type: SET_CURRENT_USER,
  payload: userData
})

// export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })
