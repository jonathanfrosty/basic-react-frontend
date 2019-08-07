import React from 'react';
import './counter.scss';

export default function Counter({ counter, handleQuantityChange, onDelete }) {
  const { id, cost, quantity } = counter;

  return (
    <div className='counter-wrapper'>
      <div className='counter-data-wrapper'>
        <div className={'item-data'}>
          Item {id} | £{cost}
        </div>
        <div className={`item-quantity ${quantity === 0 ? 'zero' : ''}`}>
          {quantity === 0 ? 'Zero' : quantity}
        </div>
        <div className='total-cost'>£{(cost * quantity).toFixed(2)}</div>
      </div>

      <div>
        <button onClick={() => handleQuantityChange(id, 1)}>&#43;</button>
        <button
          onClick={() => handleQuantityChange(id, -1)}
          disabled={quantity === 0}
        >
          &minus;
        </button>
        <button className='delete' onClick={() => onDelete(id)}>
          &times;
        </button>
      </div>
    </div>
  );
}
