import { REGISTER_REQUEST, REGISTER_SUCCESS, RESET_REGISTRATION } from '../constants/actionTypes';

const initialState = { registered: false, registering: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, registering: true };
    case REGISTER_SUCCESS:
      return { registered: true, registering: false };
    case RESET_REGISTRATION:
      return initialState;
    default:
      return state;
  }
}
