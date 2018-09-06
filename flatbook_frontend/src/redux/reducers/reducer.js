import { SET_CURRENT_USER, ADD_REVIEW_INFO } from '../types';

const initialState = {
  user: null,
  loggedIn: false,
  reviews: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {...state, user: action.payload, loggedIn: true};
    case ADD_REVIEW_INFO:
      return { ...state, reviews: action.payload};
    default:
      return state;
  }
}
