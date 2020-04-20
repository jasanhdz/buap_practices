import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  setApuntador,
  setRules,
  setRegla,
} from '../../../actions/transactionActions';

const Balance = (props) => {
  const nextRule = () => {
    if (props.apuntador === props.rules.length) {
      console.log('true');
      return props.backOptions();
    }
    props.setRegla(props.rules[props.apuntador]);
    if (props.apuntador === 0) {
      props.setApuntador(1);
    } else {
      props.setApuntador(props.apuntador + 1);
    }
  };

  useEffect(() => {
    props.setRules(['¿Generar comprobante?', 'Imprimiendo comprobante']);
    return () => props.setApuntador(1);
  }, []);

  return (
    <>
      <button className='btn primary' onClick={nextRule}>
        Continuar
      </button>
      <button className='btn primary' onClick={props.backOptions}>
        Regresar al Menú
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return state.transaction;
};

const mapsDispatchToProps = {
  setApuntador,
  setRules,
  setRegla,
};

export default connect(mapStateToProps, mapsDispatchToProps)(Balance);
