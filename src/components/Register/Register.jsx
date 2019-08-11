import React, { useState } from 'react';
import FormsList from '../FormsList/FormsList';
import './register.scss';

const initalForms = [
  {
    title: { label: 'Title', content: '' },
    firstName: { label: 'First Name', content: '' },
    lastName: { label: 'Last Name', content: '' }
  },
  {
    email: { label: 'Email', content: '' },
    mobileNumber: { label: 'Mobile Number', content: '' },
    occupation: { label: 'Occupation', content: '' }
  },
  {
    country: { label: 'Country of Residence', content: '' },
    county: { label: 'County', content: '' },
    cityOrTown: { label: 'City/Town', content: '' }
  }
];

export default function Register({ registered, setRegistered }) {
  const [forms, setForms] = useState(initalForms);

  const handleChange = (e, activeFormIndex) => {
    const newForms = forms.map((form, formIndex) => {
      if (activeFormIndex !== formIndex) return form;

      return {
        ...form,
        [e.target.name]: {
          label: form[e.target.name].label,
          content: e.target.value
        }
      };
    });

    setForms(newForms);
  };

  const handleReset = () => {
    setForms(initalForms);
    setRegistered(false);
  };

  const handleComplete = () => {
    setRegistered(true);
  };

  if (!registered) {
    return (
      <div className='registration-wrapper'>
        <h3 className='registration-title'>Please enter your registration details</h3>
        <FormsList
          forms={forms}
          onChange={(e, activeFormIndex) => handleChange(e, activeFormIndex)}
          onComplete={handleComplete}
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
