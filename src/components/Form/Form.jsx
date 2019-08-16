import React, { useEffect } from 'react';
import './form.scss';

export default function Form({ form, isActive, onChange, NextButton, BackButton }) {
  useEffect(() => {
    document.getElementsByClassName('active-form')[0].firstChild.lastChild.focus();
  }, [isActive]);

  const isFormComplete = () => {
    let isAnEmptyField = Object.values(form).find(value => value.content === '');
    return !isAnEmptyField;
  };

  return (
    <form className={`form-wrapper ${isActive ? 'active-form' : 'inactive'}`}>
      {Object.entries(form).map(([key, value]) => {
        return (
          <div key={key} className='field-wrapper'>
            <label>{value.label}</label>
            <input
              className={value.content ? 'filled' : ''}
              name={key}
              type={value.type}
              value={value.content}
              onChange={onChange}
            />
          </div>
        );
      })}
      <div className='form-buttons-wrapper'>
        <NextButton className='next' canClick={isFormComplete} />
        {BackButton && <BackButton className='back' canClick />}
      </div>
    </form>
  );
}
