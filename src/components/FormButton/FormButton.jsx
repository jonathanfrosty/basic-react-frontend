import React from 'react';
import './formButton.scss';

export default function FormButton({ text, type, canClick, onClick, loading }) {
  const handleClick = e => {
    e.preventDefault();
    if (canClick === true || canClick()) onClick();
  };

  return (
    <button
      className={`form-btn ${type} ${loading ? 'loading' : ''}`}
      onClick={handleClick}
      disabled={loading}
    >
      {!loading ? text : ''}
    </button>
  );
}
