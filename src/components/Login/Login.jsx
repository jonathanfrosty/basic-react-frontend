import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import Form from '../Form/Form';
import FormButton from '../FormButton/FormButton';
import './login.scss';

const initialLoginForm = {
  email: { label: 'Email', content: '', type: 'email' },
  password: { label: 'Password', content: '', type: 'password' }
};

export function Login({ login, history }) {
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
    history.push('/');
    login();
  };

  const LoginButton = ({ canClick }) => {
    return <FormButton text='Login' type='next' onClick={handleLogin} canClick={canClick} />;
  };

  return (
    <div className='login-wrapper'>
      <h3 className='login-title'>Please enter your login details</h3>
      <Form form={form} isActive onChange={handleChange} NextButton={LoginButton} />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => {
      dispatch(userActions.login());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Login));
