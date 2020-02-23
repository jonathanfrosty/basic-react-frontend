import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userActions } from '../../actions';
import Form from '../Form';
import './register.scss';

const initalRegisterForm = {
  firstName: { label: 'First Name', content: '', type: 'text' },
  lastName: { label: 'Last Name', content: '', type: 'text' },
  email: { label: 'Email', content: '', type: 'email' },
  username: { label: 'Username', content: '', type: 'text' },
  password: { label: 'Password', content: '', type: 'password' },
  confirmPassword: { label: 'Confirm Password', content: '', type: 'password' }
};

export function Register({ register, registering }) {
  const handleRegister = (form, history) => {
    register(form, history);
  };

  const buttons = [
    {
      label: 'Register',
      type: 'submit',
      submitting: registering,
      onClick: handleRegister
    }
  ];

  return (
    <div className='registration-wrapper'>
      <Form
        title={'Please enter your registration details'}
        formFields={initalRegisterForm}
        buttons={buttons}
      />
    </div>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  registering: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  registering: state.register.registering
});

const actionCreators = {
  register: userActions.register
};

export default connect(mapStateToProps, actionCreators)(withRouter(Register));
