import React from 'react';
import './counter.scss';

export default function Counter({ counter, onValueChange, onDelete }) {
  const { id, cost, value } = counter;

  const data = `Item ${id} - £${cost}`;
  const totalCost = (cost * value).toFixed(2);

  return (
    <div className='counter-wrapper'>
      <div className='counter-data-wrapper'>
        <div className={'item-data'}>{data}</div>
        <div className={`item-quantity ${value === 0 ? 'zero' : ''}`}>{value}</div>
        <div className='total-cost'>£{totalCost}</div>
      </div>

      <div>
        <button onClick={() => onValueChange(id, 1)}>&#43;</button>
        <button onClick={() => onValueChange(id, -1)} disabled={value === 0}>
          &minus;
        </button>
        <button className='delete' onClick={() => onDelete(id)}>
          &times;
        </button>
      </div>
    </div>
  );
}
