import { SET_CURRENT_USER } from '../types';

const initialState = {
  user: null,
  loggedIn: false
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {...state, user: action.payload, loggedIn: true};
    default:
      return state;
  }
}
