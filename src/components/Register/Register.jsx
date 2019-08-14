import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import FormsList from '../FormsList/FormsList';
import './register.scss';

const initalForms = [
  {
    title: { label: 'Title', content: '', type: 'text' },
    firstName: { label: 'First Name', content: '', type: 'text' },
    lastName: { label: 'Last Name', content: '', type: 'text' }
  },
  {
    email: { label: 'Email', content: '', type: 'email' },
    password: { label: 'Password', content: '', type: 'password' },
    mobileNumber: { label: 'Mobile Number', content: '', type: 'tel' }
  },
  {
    country: { label: 'Country of Residence', content: '', type: 'text' },
    county: { label: 'County', content: '', type: 'text' },
    cityOrTown: { label: 'City/Town', content: '', type: 'text' }
  }
];

export function Register({ registered, register, resetRegistration }) {
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

  if (!registered) {
    return (
      <div className='registration-wrapper'>
        <h3 className='registration-title'>Please enter your registration details</h3>
        <FormsList
          forms={forms}
          onChange={(e, activeFormIndex) => handleChange(e, activeFormIndex)}
          onComplete={() => register(forms)}
          finalText='Register'
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

const mapStateToProps = state => {
  const { registered } = state.register;
  return { registered };
};

const mapDispatchToProps = dispatch => {
  return {
    register: () => {
      dispatch(userActions.register());
    },
    resetRegistration: () => {
      dispatch(userActions.resetRegistration());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
