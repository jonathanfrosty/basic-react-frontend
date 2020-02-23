import React from 'react';
import './counters.scss';

export default function Counters({ counters, onReset, onAdd, render }) {
  return (
    <div className='counters-wrapper'>
      <button className='counters-button reset' onClick={onReset} disabled={counters.length === 0}>
        Reset
      </button>

      <div>{counters.map(counter => render(counter))}</div>

      <button className='counters-button add' onClick={onAdd}>
        Add
      </button>
    </div>
  );
}
