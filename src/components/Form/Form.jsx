import React, { useEffect } from 'react';
import './form.scss';

export default function Form({ form, onChange, SubmitButton }) {
  useEffect(() => {
    document.getElementsByTagName('form')[0].firstChild.lastChild.focus();
  }, []);

  const isIncomplete = () => {
    return !!Object.values(form).find(value => value.content === '');
  };

  return (
    <form className='form-wrapper'>
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
      <SubmitButton isFormIncomplete={isIncomplete()} />
    </form>
  );
}
