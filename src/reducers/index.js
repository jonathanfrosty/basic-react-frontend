import { combineReducers } from 'redux';
import authReducer from './authReducer';
import registerReducer from './registerReducer';
import basketReducer from './basketReducer';

export default combineReducers({
  auth: authReducer,
  register: registerReducer,
  basket: basketReducer
});
