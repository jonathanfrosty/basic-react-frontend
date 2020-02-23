import { combineReducers } from 'redux';
import authReducer from './authReducer';
import registerReducer from './registerReducer';
import basketReducer from './basketReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
  auth: authReducer,
  register: registerReducer,
  basket: basketReducer,
  errors: errorsReducer
});
