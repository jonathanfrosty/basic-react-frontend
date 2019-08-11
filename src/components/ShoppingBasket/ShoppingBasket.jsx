import React, { useState } from 'react';
import Counters from '../Counters/Counters';
import Counter from '../Counter/Counter';
import './shoppingBasket.scss';

export default function ShoppingBasket() {
  const [counters, setCounters] = useState([]);

  const generateRandomCost = () => {
    return (Math.random() * (100 - 0.01 + 1) + 0.01).toFixed(2);
  };

  const handleReset = () => {
    const newCounters = counters.map(counter => {
      counter.value = 0;
      return counter;
    });

    setCounters(newCounters);
  };

  const handleAdd = () => {
    const newId = counters.length === 0 ? 1 : counters[counters.length - 1].id + 1;
    const newCounters = [...counters, { id: newId, cost: generateRandomCost(), value: 0 }];

    setCounters(newCounters);
  };

  const handleDelete = id => {
    const newCounters = counters.filter(counter => counter.id !== id);

    setCounters(newCounters);
  };

  const handleValueChange = (id, change) => {
    const newCounters = [...counters];
    newCounters.forEach(counter => {
      if (counter.id === id) {
        counter.value += change;
        return;
      }
    });

    setCounters(newCounters);
  };

  const getTotalItemsCount = () => {
    let totalItemsCount = 0;
    counters.forEach(counter => {
      totalItemsCount += counter.value;
    });

    return totalItemsCount;
  };

  const getTotalItemsCost = () => {
    let totalItemsCost = 0;
    counters.forEach(counter => {
      totalItemsCost += counter.value * counter.cost;
    });

    return totalItemsCost.toFixed(2);
  };

  return (
    <div className='shopping-basket-wrapper'>
      <Counters
        counters={counters}
        onReset={handleReset}
        onAdd={handleAdd}
        render={counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={handleDelete}
            onValueChange={handleValueChange}
          />
        )}
      />

      <div id='basket-summary-wrapper'>
        <h2 id='summary-title'>Summary</h2>
        <div id='total-items-count'>Total Items: {getTotalItemsCount()}</div>
        <div id='total-items-cost'>Total Cost: £{getTotalItemsCost()}</div>
      </div>
    </div>
  );
}
