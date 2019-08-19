import React from 'react';
import './formButton.scss';

export default ({ onClick, isFormIncomplete, loading, children }) => (
  <button
    className={`form-button ${loading ? 'loading' : ''}`}
    onClick={onClick}
    disabled={isFormIncomplete || loading}
  >
    {!loading ? children : ''}
  </button>
);
