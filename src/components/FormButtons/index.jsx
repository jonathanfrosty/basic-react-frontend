import React from 'react';
import PropTypes from 'prop-types';
import FormButton from '../FormButton';
import './formButtons.scss';

export default function FormButtons({ buttons, canSubmit }) {
  return (
    <div className='form-buttons'>
      {buttons.map(button => (
        <FormButton
          key={button.label}
          type={button.type}
          disabled={button.type === 'submit' && !canSubmit}
          loading={button.submitting}
          onClick={button.onClick}
        >
          {button.label}
        </FormButton>
      ))}
    </div>
  );
}

FormButtons.propTypes = {
  buttons: PropTypes.array.isRequired,
  canSubmit: PropTypes.bool.isRequired
};
