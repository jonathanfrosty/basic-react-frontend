import * as types from '../constants/actionTypes';

export const login = form => async dispatch => {
  dispatch({ type: types.LOGIN_REQUEST });
  const user = await fakeServerCall(form);
  dispatch({ type: types.LOGIN_SUCCESS, user });
};
export const logout = () => ({ type: types.LOGOUT });

export const register = form => async dispatch => {
  dispatch({ type: types.REGISTER_REQUEST });
  await fakeServerCall(form);
  dispatch({ type: types.REGISTER_SUCCESS });
};
export const resetRegistration = () => ({ type: types.RESET_REGISTRATION });

const fakeServerCall = async user => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return user;
};
