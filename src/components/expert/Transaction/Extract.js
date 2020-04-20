import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  setRules,
  setRegla,
  setApuntador,
  setSaldo,
} from '../../../actions/transactionActions';
import { useInputValue } from '../../../hooks/useInputValue';

const Extract = (props) => {
  const [sucess, setSuccess] = useState(false);
  const quantity = useInputValue(5);

  const extractMoney = (e) => {
    e.preventDefault();
    if (!quantity.value) return alert('El valor del input es requerido... 😜');
    if (quantity.value < 0)
      return alert('No es válido que ingreses números negativos 😡');
    console.log(`Ingresó ${quantity.value}`);
    const rules = [
      `Se Retiraron ${quantity.value} USD a la cuenta`,
      'Imprimir comprobante',
    ];
    props.setRules(rules);
    props.setRegla(rules[0]);
    props.setApuntador(1);
    validarSaldo(quantity.value);
    setSuccess(true);
  };

  const validarSaldo = (value) => {
    if (props.saldo > value) {
      const actual = props.saldo - parseInt(value);
      props.setSaldo(actual);
    }
  };

  const nextRule = () => {
    if (props.apuntador === props.rules.length) {
      console.log('true');
      return props.backOptions();
    }
    props.setRegla(props.rules[props.apuntador]);
    props.setApuntador(props.apuntador + 1);
  };

  if (sucess) {
    return (
      <>
        <button className='btn primary' onClick={nextRule}>
          Ok
        </button>
        <button className='btn primary' onClick={props.backOptions}>
          No
        </button>
      </>
    );
  }

  return (
    <>
      <form onSubmit={extractMoney} className='Form_group'>
        <input
          className='Input'
          required
          type='number'
          max={5000}
          min={0}
          {...quantity}
        />
        <div className='btn_container'>
          <button type='submit' className='btn primary' onClick={extractMoney}>
            Confirmar
          </button>
          <button
            type='button'
            className='btn primary'
            onClick={props.backOptions}
          >
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = (state, props) => {
  return state.transaction;
};

const mapDispatchToProps = {
  setApuntador,
  setRegla,
  setRules,
  setSaldo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Extract);
