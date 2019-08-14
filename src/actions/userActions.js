import * as types from '../constants/actionTypes';

export const login = (email, password) => ({
  type: types.LOGIN_SUCCESS,
  payload: { email, password }
});

export const logout = () => ({ type: types.LOGOUT });

export const register = user => ({ type: types.REGISTER_SUCCESS, user });
export const resetRegistration = () => ({ type: types.RESET_REGISTRATION });
