import React from 'react';
import './shoppingBasket.scss';

export default function ShoppingBasket({ counters, renderItem }) {
  const getTotalItemsCount = () => {
    let totalItemsCount = 0;
    counters.forEach(counter => {
      totalItemsCount += counter.quantity;
    });

    return totalItemsCount;
  };

  const getTotalItemsCost = () => {
    let totalItemsCost = 0;
    counters.forEach(counter => {
      totalItemsCost += counter.quantity * counter.cost;
    });

    return totalItemsCost.toFixed(2);
  };

  return (
    <div className='shopping-basket-wrapper'>
      <div>{renderItem(counters)}</div>

      <div id='basket-summary-wrapper'>
        <h2 id='summary-title'>Summary</h2>
        <div id='total-items-count'>Total Items: {getTotalItemsCount()}</div>
        <div id='total-items-cost'>Total Cost: £{getTotalItemsCost()}</div>
      </div>
    </div>
  );
}
