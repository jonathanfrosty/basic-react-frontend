import React from 'react';
import './form.scss';

export default function Form({
  formMetaData,
  formState,
  onChange,
  onBack,
  onContinue
}) {
  const { index, activeFormIndex, totalForms } = formMetaData;

  const inactive = activeFormIndex !== index;
  const firstForm = index === 0;
  const finalForm = index === totalForms - 1;

  return (
    <div className={`form-wrapper ${inactive ? 'inactive' : ''}`}>
      <form>
        {formState.map(field => {
          return (
            <div key={field.label} className='field-wrapper'>
              <label>{field.label}</label>
              <input
                name={field.label}
                onChange={input => onChange(input, index)}
                value={field.content}
              />
            </div>
          );
        })}
      </form>
      <div className='form-buttons-wrapper'>
        {!firstForm && <button onClick={onBack}>Back</button>}
        <button onClick={() => onContinue(index)}>
          {finalForm ? 'Confirm' : 'Continue'}
        </button>
      </div>
    </div>
  );
}
