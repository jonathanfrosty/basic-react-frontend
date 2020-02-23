import { CLEAR_ERRORS } from '../constants/actionTypes';

const initialState = {
  errorList: []
};

const constructError = (type = 'Error', message = 'Something went wrong.') => {
  return {
    code: type,
    description: message
  };
};

const getErrorMessages = e => {
  if (e.response) return e.response.data.errors || [];
  return [constructError(e.type, e.message)];
};

export default (state = initialState, action) => {
  if (action.type.endsWith('FAILURE')) {
    return {
      errorList: getErrorMessages(action.exception)
    };
  }

  switch (action.type) {
    case CLEAR_ERRORS:
      return {
        errorList: []
      };
    default:
      return state;
  }
};
