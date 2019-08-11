import React from 'react';
import './formButtons.scss';

export default function FormButtons({ isFirstForm, isFinalForm, onBack, onContinue }) {
  const handleBack = e => {
    e.preventDefault();
    onBack();
  };

  const handleContinue = e => {
    e.preventDefault();
    onContinue();
  };

  return (
    <div>
      {!isFirstForm && <button onClick={handleBack}>Back</button>}
      <button onClick={handleContinue}>{isFinalForm ? 'Confirm' : 'Continue'}</button>
    </div>
  );
}
