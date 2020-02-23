import * as types from '../constants/actionTypes';
import axios from 'axios';
import { loginUrl, registerUrl } from '../api/urls';

const headers = {
  'Content-Type': 'application/json'
};

export const login = (form, history) => async dispatch => {
  dispatch({ type: types.LOGIN_REQUEST });

  const { username, password } = form;
  const body = {
    username: username.content,
    password: password.content
  };

  try {
    const response = await axios.post(loginUrl, body, headers);
    const token = response.data.token;
    localStorage.setItem('token', token);

    dispatch({ type: types.LOGIN_SUCCESS, user: form });
    history.push('/');
  } catch (exception) {
    dispatch({ type: types.LOGIN_FAILURE, exception });
  }
};

export const logout = () => async dispatch => {
  localStorage.removeItem('token');
  dispatch({ type: types.LOGOUT });
};

export const register = (form, history) => async dispatch => {
  dispatch({ type: types.REGISTER_REQUEST });

  const { email, username, password, confirmPassword } = form;

  if (password.content !== confirmPassword.content) {
    dispatch({
      type: types.REGISTER_FAILURE,
      exception: {
        type: 'ConfirmPasswordMismatch',
        message: 'Password and Confirm Password do not match.'
      }
    });
    return;
  }

  const body = {
    email: email.content,
    username: username.content,
    password: password.content
  };

  try {
    await axios.post(registerUrl, body, headers);
    dispatch({ type: types.REGISTER_SUCCESS });
    history.push('/login');
  } catch (exception) {
    dispatch({ type: types.REGISTER_FAILURE, exception });
  }
};

export const resetRegistration = () => ({ type: types.RESET_REGISTRATION });
