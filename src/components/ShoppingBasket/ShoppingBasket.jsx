import React from 'react';
import { connect } from 'react-redux';
import { basketActions } from '../../actions';
import Counters from '../Counters/Counters';
import Counter from '../Counter/Counter';
import PropTypes from 'prop-types';
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

ShoppingBasket.propTypes = {
  counters: PropTypes.array.isRequired,
  changeValue: PropTypes.func.isRequired,
  addCounter: PropTypes.func.isRequired,
  deleteCounter: PropTypes.func.isRequired,
  resetCounters: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { counters: state.basket };
};

const actionCreators = {
  changeValue: basketActions.changeValue,
  addCounter: basketActions.addCounter,
  deleteCounter: basketActions.deleteCounter,
  resetCounters: basketActions.resetCounters
};

export default connect(
  mapStateToProps,
  actionCreators
)(ShoppingBasket);
