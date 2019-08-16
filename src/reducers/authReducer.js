import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../constants/actionTypes';

const initialState = { loggedIn: false, loggingIn: false, username: '', password: '' };

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
        username: action.user.username.content,
        password: action.user.password.content
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
