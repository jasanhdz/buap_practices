import { combineReducers } from 'redux';
import bank from './bank';
import transaction from './transaction';
import medico from './medico-expert/'

const rootReducer = combineReducers({
  bank,
  transaction,
  medico
});

export default rootReducer;
