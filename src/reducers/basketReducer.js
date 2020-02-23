import { CHANGE_VALUE, ADD_COUNTER, DELETE_COUNTER, RESET_COUNTERS } from '../constants/actionTypes';

const initialState = [];

const generateRandomCost = () => {
  return (Math.random() * (100 - 0.01 + 1) + 0.01).toFixed(2);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return state.map(counter => {
        if (counter.id !== action.payload.id) return counter;

        return {
          ...counter,
          value: counter.value + action.payload.change
        };
      });
    case ADD_COUNTER:
      const newId = state.length === 0 ? 1 : state[state.length - 1].id + 1;
      return [...state, { id: newId, cost: generateRandomCost(), value: 0 }];
    case DELETE_COUNTER:
      return state.filter(counter => action.id !== counter.id);
    case RESET_COUNTERS:
      return state.map(counter => {
        return {
          ...counter,
          value: 0
        };
      });
    default:
      return state;
  }
};
