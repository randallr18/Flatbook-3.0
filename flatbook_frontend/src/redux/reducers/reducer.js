import { SET_CURRENT_USER, ADD_REVIEW_INFO, AUTHENTICATING_USER, LOADING_INFORMATION, ADD_PROJECT_INFO, FAILED_LOGIN, LOGOUT, ADD_USERS_INFO, ADD_USER_SEARCH_DATA } from '../types';

const initialState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  loadingInformation: false,
  failedLogin: false,
  error: null,
  reviews: [],
  projects: [],
  users: [],
  userSearch: null,
}

export default function reducer(state = initialState, action) {
  console.log(action.payload);
  switch(action.type) {
    case SET_CURRENT_USER:
      return {...state, user: action.payload, loggedIn: true, authenticatingUser: false, loadingInformation: false, failedLogin: false};
    case ADD_REVIEW_INFO:
      return { ...state, reviews: action.payload};
    case ADD_USERS_INFO:
      return { ...state, users: action.payload};
    case AUTHENTICATING_USER:
      return {...state, authenticatingUser: true};
    case LOADING_INFORMATION:
      return {...state, loadingInformation: true};
    case ADD_PROJECT_INFO:
      return {...state, projects: action.payload};
    case ADD_USER_SEARCH_DATA:
      return {...state, userSearch: action.payload};
    case FAILED_LOGIN:
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
        authenticatingUser: false
      }
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
      }
    default:
      return state;
  }
}
