import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userActions } from '../../actions';
import Form from '../Form/Form';
import FormButton from '../FormButton/FormButton';
import PropTypes from 'prop-types';
import './register.scss';

const initalForm = {
  firstName: { label: 'First Name', content: '', type: 'text' },
  lastName: { label: 'Last Name', content: '', type: 'text' },
  email: { label: 'Email', content: '', type: 'email' },
  username: { label: 'Username', content: '', type: 'text' },
  password: { label: 'Password', content: '', type: 'password' },
  confirmPassword: { label: 'Confirm Password', content: '', type: 'password' }
};

export function Register({ registered, registering, register, resetRegistration, history }) {
  const [form, setForm] = useState(initalForm);

  useEffect(() => {
    return () => {
      resetRegistration();
    };
  }, [resetRegistration]);

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

  const handleReset = () => {
    setForm(initalForm);
    resetRegistration();
  };

  const handleRegister = () => {
    register(form, history);
  };

  const RegisterButton = () => {
    return (
      <FormButton onClick={handleRegister} loading={registering}>
        Register
      </FormButton>
    );
  };

  if (!registered) {
    return (
      <div className='registration-wrapper'>
        <h3 className='registration-title'>Please enter your registration details</h3>
        <Form form={form} onChange={handleChange}>
          <RegisterButton />
        </Form>
      </div>
    );
  } else {
    return (
      <div className='registration-complete-wrapper'>
        <h2>Registration Complete</h2>
        <div className='register-again-wrapper'>
          <button className='register-again-button' onClick={handleReset}>
            Register again
          </button>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registered: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  resetRegistration: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { registered, registering } = state.register;
  return { registered, registering };
};

const actionCreators = {
  register: userActions.register,
  resetRegistration: userActions.resetRegistration
};

export default connect(
  mapStateToProps,
  actionCreators
)(withRouter(Register));
