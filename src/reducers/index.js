import { combineReducers } from 'redux';
import bank from './bank';
import transaction from './transaction';

const rootReducer = combineReducers({
  bank,
  transaction,
});

export default rootReducer;
