import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import Form from '../Form';
import PropTypes from 'prop-types';
import './login.scss';

const initialLoginForm = {
  username: { label: 'Username', content: '', type: 'text' },
  password: { label: 'Password', content: '', type: 'password' }
};

export function Login({ login, loggingIn, registered, resetRegisteredStatus }) {
  useEffect(() => {
    return () => {
      if (registered) resetRegisteredStatus();
    };
  }, [registered, resetRegisteredStatus]);

  const handleLogin = (form, history) => {
    login(form, history);
  };

  const buttons = [
    {
      label: 'Login',
      type: 'submit',
      submitting: loggingIn,
      onClick: handleLogin
    }
  ];

  return (
    <div className='login-wrapper'>
      {registered && <div className='registration-success'>Registration successful</div>}
      <Form
        title={'Please enter your login details'}
        formFields={initialLoginForm}
        buttons={buttons}
      />
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  loggingIn: PropTypes.bool.isRequired,
  registered: PropTypes.bool.isRequired,
  resetRegisteredStatus: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loggingIn: state.auth.loggingIn,
  registered: state.register.registered
});

const actionCreators = {
  login: userActions.login,
  resetRegisteredStatus: userActions.resetRegistration
};

export default connect(mapStateToProps, actionCreators)(Login);
