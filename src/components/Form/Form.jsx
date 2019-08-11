import React from 'react';
import FormButtons from '../FormButtons/FormButtons';
import './form.scss';

export default function Form({ formMetaData, formState, onChange, onBack, onContinue }) {
  const { index, activeFormIndex, totalForms } = formMetaData;

  const inactive = activeFormIndex !== index;
  const firstForm = index === 0;
  const finalForm = index === totalForms - 1;

  const handleClickBack = () => {
    onBack();
  };

  const handleClickNext = () => {
    onContinue(index);
  };

  return (
    <form className={`form-wrapper ${inactive ? 'inactive' : ''}`}>
      {Object.entries(formState).map(([key, value]) => {
        return (
          <div key={key} className='field-wrapper'>
            <label>{value.label}</label>
            <input name={key} onChange={input => onChange(input, index)} value={value.content} />
          </div>
        );
      })}
      <FormButtons
        firstForm={firstForm}
        finalForm={finalForm}
        onBack={handleClickBack}
        onContinue={handleClickNext}
      />
    </form>
  );
}
