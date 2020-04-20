import {
  SET_APUNTADOR,
  SET_RULE,
  SET_GOOUT,
  SET_RULES,
  SET_SALDO,
} from '../types/transactionTypes';

export const setApuntador = (payload) => ({
  type: SET_APUNTADOR,
  payload,
});

export const setRegla = (payload) => ({
  type: SET_RULE,
  payload,
});

export const setSalir = (payload) => ({
  type: SET_GOOUT,
  payload,
});

export const setRules = (payload) => {
  return {
    type: SET_RULES,
    payload,
  };
};

export const setSaldo = (payload) => {
  return {
    type: SET_SALDO,
    payload,
  };
};
