import React from 'react';
import Form from '../Form/Form';
import './register.scss';

export default function Register({
  registered,
  formsState,
  activeFormIndex,
  onContinue,
  onBack,
  onChange,
  onRegisterAgain
}) {
  if (!registered) {
    return (
      <div className='registration-wrapper'>
        <h3 className='registration-title'>
          Please enter your registration details
        </h3>
        <div className='forms-wrapper'>
          {formsState.map((formState, index) => {
            const formMetaData = {
              index,
              activeFormIndex,
              totalForms: formsState.length
            };

            return (
              <Form
                key={index}
                formMetaData={formMetaData}
                formState={formState}
                onChange={onChange}
                onContinue={onContinue}
                onBack={onBack}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className='registration-complete-wrapper'>
        <h2>Registration Complete</h2>
        <div className='register-again-wrapper'>
          <button className='register-again-button' onClick={onRegisterAgain}>
            Register again
          </button>
        </div>
      </div>
    );
  }
}
