import { REGISTER_SUCCESS, RESET_REGISTRATION } from '../constants/actionTypes';

const initialState = { registered: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { registered: true };
    case RESET_REGISTRATION:
      return { registered: false };
    default:
      return state;
  }
}
