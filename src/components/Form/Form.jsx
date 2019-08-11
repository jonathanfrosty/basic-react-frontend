import React from 'react';
import FormButtons from '../FormButtons/FormButtons';
import './form.scss';

export default function Form({ formIndexData, form, onChange, onBack, onContinue }) {
  const { index, activeFormIndex, finalIndex } = formIndexData;

  const inactive = activeFormIndex !== index;
  const isFirstForm = index === 0;
  const isFinalForm = index === finalIndex;

  const canContinue = () => {
    let isAnEmptyField = Object.values(form).find(value => value.content === '');
    return !isAnEmptyField;
  };

  const handleContinue = () => {
    if (canContinue()) onContinue(isFinalForm);
  };

  return (
    <form className={`form-wrapper ${inactive ? 'inactive' : ''}`}>
      {Object.entries(form).map(([key, value]) => {
        return (
          <div key={key} className='field-wrapper'>
            <label>{value.label}</label>
            <input
              className={value.content ? 'filled' : ''}
              name={key}
              value={value.content}
              onChange={onChange}
            />
          </div>
        );
      })}
      <FormButtons
        isFirstForm={isFirstForm}
        isFinalForm={isFinalForm}
        onBack={onBack}
        onContinue={handleContinue}
      />
    </form>
  );
}
