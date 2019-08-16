import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../constants/actionTypes';

const initialState = { loggedIn: false, loggingIn: false, user: null };

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        loggingIn: false,
        user: action.user
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
