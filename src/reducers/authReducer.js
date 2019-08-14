import { LOGIN_SUCCESS, LOGOUT } from '../constants/actionTypes';

const initialState = { loggedIn: false, userEmail: '', userPass: '' };

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { loggedIn: true, userEmail: action.payload.email, userPass: action.payload.password };
    case LOGOUT:
      return { loggedIn: false, userEmail: '', userPass: '' };
    default:
      return state;
  }
}
