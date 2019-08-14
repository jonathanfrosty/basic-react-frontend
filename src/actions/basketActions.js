import * as types from '../constants/actionTypes';

export const changeValue = (id, change) => ({ type: types.CHANGE_VALUE, payload: { id, change } });
export const addCounter = () => ({ type: types.ADD_COUNTER });
export const deleteCounter = id => ({ type: types.DELETE_COUNTER, id });
export const resetCounters = () => ({ type: types.RESET_COUNTERS });
