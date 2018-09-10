import { SET_CURRENT_USER, ADD_REVIEW_INFO, AUTHENTICATING_USER, LOADING_INFORMATION } from '../types';

const initialState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  loadingInformation: false,
  reviews: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {...state, user: action.payload, loggedIn: true, authenticatingUser: false, loadingInformation: false};
    case ADD_REVIEW_INFO:
      return { ...state, reviews: action.payload};
    case AUTHENTICATING_USER:
      return {...state, authenticatingUser: true}
    case LOADING_INFORMATION:
      return {...state, loadingInformation: true}
    default:
      return state;
  }
}
