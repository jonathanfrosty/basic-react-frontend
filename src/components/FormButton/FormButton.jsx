import React from 'react';
import './formButton.scss';

export default ({ onClick, loading, children }) => (
  <button
    className={`form-button ${loading ? 'loading' : ''}`}
    onClick={onClick}
    disabled={loading}
  >
    {!loading ? children : ''}
  </button>
);
