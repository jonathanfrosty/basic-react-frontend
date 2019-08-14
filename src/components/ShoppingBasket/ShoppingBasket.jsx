import React from 'react';
import { connect } from 'react-redux';
import { basketActions } from '../../actions';
import Counters from '../Counters/Counters';
import Counter from '../Counter/Counter';
import './shoppingBasket.scss';

export function ShoppingBasket({
  counters,
  changeValue,
  addCounter,
  deleteCounter,
  resetCounters
}) {
  const handleDelete = id => {
    deleteCounter(id);
  };

  const handleValueChange = (id, change) => {
    changeValue(id, change);
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
        onReset={resetCounters}
        onAdd={addCounter}
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

const mapStateToProps = state => {
  return { counters: state.basket };
};

const mapDispatchToProps = dispatch => {
  return {
    changeValue: (id, change) => {
      dispatch(basketActions.changeValue(id, change));
    },
    addCounter: () => {
      dispatch(basketActions.addCounter());
    },
    deleteCounter: id => {
      dispatch(basketActions.deleteCounter(id));
    },
    resetCounters: () => {
      dispatch(basketActions.resetCounters());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingBasket);
