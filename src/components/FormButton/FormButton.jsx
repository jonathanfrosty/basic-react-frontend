import React from 'react';
import './formButton.scss';

export default function FormButton({ text, type, canClick, onClick }) {
  const handleClick = e => {
    e.preventDefault();
    if (canClick()) onClick();
  };

  return (
    <button className={`form-btn ${type}`} onClick={handleClick}>
      {text}
    </button>
  );
}
