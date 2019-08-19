import * as types from '../constants/actionTypes';

export const login = (form, history) => async dispatch => {
  dispatch({ type: types.LOGIN_REQUEST });

  try {
    const user = await fakeServerCall(form);
    dispatch({ type: types.LOGIN_SUCCESS, user });
    history.push('/');
  } catch (e) {
    console.log('Login error: ' + e);
  }
};
export const logout = () => ({ type: types.LOGOUT });

export const register = (form, history) => async dispatch => {
  dispatch({ type: types.REGISTER_REQUEST });

  try {
    await fakeServerCall(form);
    dispatch({ type: types.REGISTER_SUCCESS });
    history.push('/login');
  } catch (e) {
    console.log('Registration error: ' + e);
  }
};
export const resetRegistration = () => ({ type: types.RESET_REGISTRATION });

const fakeServerCall = async user => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return user;
};
