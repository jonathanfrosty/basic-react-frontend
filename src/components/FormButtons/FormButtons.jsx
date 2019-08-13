import React from 'react';
import './formButtons.scss';

export default function FormButtons({ isFirstForm, isFinalForm, onBack, onContinue }) {
  const handleClickBack = e => {
    e.preventDefault();
    if (e.detail !== 0) onBack();
  };

  const handleClickContinue = e => {
    e.preventDefault();
    if (e.detail !== 0) onContinue();
  };

  return (
    <div>
      {!isFirstForm && <button onClick={handleClickBack}>Back</button>}
      <button onClick={handleClickContinue}>{isFinalForm ? 'Confirm' : 'Continue'}</button>
    </div>
  );
}
