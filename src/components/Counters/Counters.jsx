import React from 'react';
import './counters.scss';

export default function Counters({ counters, onReset, onAdd, renderItem }) {
  return (
    <div className='counters-wrapper'>
      <button className='counters-button reset' onClick={onReset}>
        Reset
      </button>

      <div>{counters.map(counter => renderItem(counter))}</div>

      <button className='counters-button add' onClick={onAdd}>
        Add
      </button>
    </div>
  );
}
