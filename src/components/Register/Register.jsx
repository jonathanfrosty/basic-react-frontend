import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import FormsList from '../FormsList/FormsList';
import FormButton from '../FormButton/FormButton';
import PropTypes from 'prop-types';
import './register.scss';

const initalForms = [
  {
    title: { label: 'Title', content: '', type: 'text' },
    firstName: { label: 'First Name', content: '', type: 'text' },
    lastName: { label: 'Last Name', content: '', type: 'text' },
    email: { label: 'Email', content: '', type: 'email' }
  },
  {
    username: { label: 'Username', content: '', type: 'text' },
    password: { label: 'Password', content: '', type: 'password' },
    mobileNumber: { label: 'Mobile Number', content: '', type: 'tel' },
    country: { label: 'Country of Residence', content: '', type: 'text' }
  }
];

export function Register({ registered, registering, register, resetRegistration }) {
  const [forms, setForms] = useState(initalForms);

  useEffect(() => {
    return () => {
      resetRegistration();
    };
  }, [resetRegistration]);

  const handleChange = (e, activeFormIndex) => {
    const newForms = forms.map((form, formIndex) => {
      if (activeFormIndex !== formIndex) return form;

      return {
        ...form,
        [e.target.name]: {
          ...form[e.target.name],
          content: e.target.value
        }
      };
    });

    setForms(newForms);
  };

  const handleReset = () => {
    setForms(initalForms);
    resetRegistration();
  };

  const handleRegister = () => {
    let allDetails = Object.assign({}, ...forms);
    register(allDetails);
  };

  const RegisterButton = ({ canClick }) => {
    return (
      <FormButton
        text='Register'
        type='next'
        onClick={handleRegister}
        canClick={canClick}
        loading={registering}
      />
    );
  };

  if (!registered) {
    return (
      <div className='registration-wrapper'>
        <h3 className='registration-title'>Please enter your registration details</h3>
        <FormsList
          forms={forms}
          onChange={(e, activeFormIndex) => handleChange(e, activeFormIndex)}
          CompleteButton={RegisterButton}
        />
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
)(Register);
