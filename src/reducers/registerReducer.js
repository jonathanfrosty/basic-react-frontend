import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  RESET_REGISTRATION
} from '../constants/actionTypes';

const initialState = {
  registered: false,
  registering: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        registering: true
      };
    case REGISTER_SUCCESS:
      return {
        registered: true,
        registering: false,
        errors: []
      };
    case REGISTER_FAILURE:
    case RESET_REGISTRATION:
      return initialState;
    default:
      return state;
  }
};
