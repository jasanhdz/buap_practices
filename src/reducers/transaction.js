import {
  SET_APUNTADOR,
  SET_RULE,
  SET_GOOUT,
  SET_RULES,
  SET_SALDO,
} from '../types/transactionTypes';

const INITIAL_STATE = {
  allRules: {
    transactionNames: ['Extraer', 'Depositar', 'Saldo'],
    transactionType: {
      extraction: 'Ingresa monto 💵 a retirar',
      deposit: 'Ingresa monto 💰 a depositar',
      balance: 'Su saldo es de 5090 USD',
    },
  },
  baseDeConocimiento: {
    Fallo: 'Lo sentimos :( no se pudo realizar la transacción hubo un error 🚫',
    success: 'Exelente, la transacción se realizó correctamente',
  },
  apuntador: 0,
  rule: '¿Transacción Válida?',
  rules: ['¿Transacción Válida?', 'Tipo de transacción'],
  salir: null,
  extraction: false,
  deposit: false,
  balance: false,
  saldo: 5090,
};

function transaction(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_APUNTADOR:
      return { ...state, apuntador: action.payload };
    case SET_RULE:
      return { ...state, rule: action.payload };
    case SET_GOOUT:
      return { ...state, salir: action.payload };
    case SET_RULES:
      return { ...state, rules: action.payload };
    case SET_SALDO:
      return { ...state, saldo: action.payload };
    default:
      return state;
  }
}

export default transaction;
