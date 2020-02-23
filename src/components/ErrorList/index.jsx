import React from 'react';
import './errorList.scss';

export default function ErrorList({ errors }) {
  return (
    errors.length > 0 && (
      <div className='error-list'>
        {errors.map(error => (
          <div key={error.code}>{error.description}</div>
        ))}
      </div>
    )
  );
}
