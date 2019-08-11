import React from 'react';
import './formButtons.scss';

export default function FormButtons({
  firstForm,
  finalForm,
  onBack,
  onContinue
}) {
  const handleClickBack = e => {
    e.preventDefault();
    onBack();
  };

  const handleClickNext = e => {
    e.preventDefault();
    onContinue();
  };

  return (
    <div>
      {!firstForm && <button onClick={handleClickBack}>Back</button>}
      <button onClick={handleClickNext}>
        {finalForm ? 'Confirm' : 'Continue'}
      </button>
    </div>
  );
}
