import React, { useState } from 'react';
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

export function Register({ register, registering, history }) {
  const [form, setForm] = useState(initalForm);

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

  const handleRegister = () => {
    register(form, history);
  };

  const RegisterButton = ({ isFormIncomplete }) => {
    return (
      <FormButton onClick={handleRegister} isFormIncomplete={isFormIncomplete} loading={registering}>
        Register
      </FormButton>
    );
  };

  return (
    <div className='registration-wrapper'>
      <h3 className='registration-title'>Please enter your registration details</h3>
      <Form form={form} onChange={handleChange} SubmitButton={RegisterButton} />
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

export default connect(
  mapStateToProps,
  actionCreators
)(withRouter(Register));
