import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userActions } from '../../actions';
import Form from '../Form/Form';
import FormButton from '../FormButton/FormButton';
import PropTypes from 'prop-types';
import './login.scss';

const initialLoginForm = {
  username: { label: 'Username', content: '', type: 'text' },
  password: { label: 'Password', content: '', type: 'password' }
};

export function Login({ login, loggingIn, registered, resetRegisteredStatus, history }) {
  const [form, setForm] = useState(initialLoginForm);
  useEffect(() => {
    return () => {
      resetRegisteredStatus();
    };
  }, [resetRegisteredStatus]);

  const handleChange = e => {
    const newForm = {
      ...form,
      [e.target.name]: {
        ...form[e.target.name],
        content: e.target.value
      }
    };

    setForm(newForm);
  };

  const handleLogin = () => {
    login(form, history);
  };

  const LoginButton = ({ isFormIncomplete }) => {
    return (
      <FormButton onClick={handleLogin} isFormIncomplete={isFormIncomplete} loading={loggingIn}>
        Login
      </FormButton>
    );
  };

  return (
    <div className='login-wrapper'>
      {registered && <div className='registration-success'>Registration successful</div>}
      <h3 className='login-title'>Please enter your login details</h3>
      <Form form={form} onChange={handleChange} SubmitButton={LoginButton} />
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

export default connect(
  mapStateToProps,
  actionCreators
)(withRouter(Login));
