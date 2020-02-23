import React from 'react';
import './formButton.scss';

export default ({ type = '', disabled, loading, onClick, children }) => {
  const handleClick = e => {
    e.preventDefault();
    if (typeof onClick === 'function') onClick();
  };

  return (
    <button
      className={`form-button ${type} ${loading ? 'loading' : ''}`}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      {!loading ? children : ''}
    </button>
  );
};
