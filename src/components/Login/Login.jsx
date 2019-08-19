import React, { useState } from 'react';
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

export function Login({ login, loggingIn, history }) {
  const [form, setForm] = useState(initialLoginForm);

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

  const LoginButton = () => {
    return (
      <FormButton onClick={handleLogin} loading={loggingIn}>
        Login
      </FormButton>
    );
  };

  return (
    <div className='login-wrapper'>
      <h3 className='login-title'>Please enter your login details</h3>
      <Form form={form} onChange={handleChange}>
        <LoginButton />
      </Form>
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ loggingIn: state.auth.loggingIn });

const actionCreators = {
  login: userActions.login
};

export default connect(
  mapStateToProps,
  actionCreators
)(withRouter(Login));
