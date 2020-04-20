import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setRegla, setRules } from '../../actions/transactionActions';
import RuleLayout from './RuleLayout';
import { TransactionOptions } from './Transaction/TransactionOptions';
import Extract from './Transaction/Extract';
import Deposit from './Transaction/Deposit';
import { Default } from './Transaction/Default';
import Balance from './Transaction/Balance';

const TransactionRule = (props) => {
  console.log(props);
  const { transactionType } = props.allRules;
  const [transaction, setTransaction] = useState(false);
  const [extract, setExtract] = useState(false);
  const [deposit, setDeposit] = useState(false);
  const [balance, setBalance] = useState(false);
  const [salir, setSalir] = useState(false);

  const transactionOption = (type, fn, saldo) => {
    console.log(type);
    if (transaction) setTransaction(false);
    fn(true);
    if (saldo) {
      return props.setRegla(`Su saldo es de ${props.saldo} USD`);
    }
    props.setRegla(type);
  };

  useEffect(() => {
    return () => {
      console.log('ComponentWillUnMount');
      props.setRegla('¿Transacción Válida?');
      props.setRules([]);
    };
  }, []);

  const btnCancel = () => {
    setSalir(true);
    setTransaction(false);
    setExtract(false);
    setDeposit(false);
    setBalance(false);
    props.setRules([]);
    props.setRegla('¿Transacción Válida?');
  };

  const backOptions = () => {
    setTransaction(true);
    setExtract(false);
    setDeposit(false);
    setBalance(false);
  };

  const start = () => {
    setSalir(false);
  };

  switch (true) {
    case transaction:
      return (
        <RuleLayout subtitle='Tipo de Transacción:'>
          <TransactionOptions
            transactionType={transactionType}
            transactionOption={transactionOption}
            setExtract={setExtract}
            setDeposit={setDeposit}
            setBalance={setBalance}
            btnCancel={btnCancel}
            rules={props.rules}
          />
        </RuleLayout>
      );

    case extract:
      return (
        <RuleLayout>
          <Extract btnCancel={btnCancel} backOptions={backOptions} />
        </RuleLayout>
      );

    case deposit:
      return (
        <RuleLayout>
          <Deposit btnCancel={btnCancel} backOptions={backOptions} />
        </RuleLayout>
      );

    case balance:
      return (
        <RuleLayout>
          <Balance btnCancel={btnCancel} backOptions={backOptions} />
        </RuleLayout>
      );

    case salir:
      return (
        <RuleLayout subtitle={props.baseDeConocimiento.Fallo}>
          <button className='btn primary' onClick={start}>
            ¿Volver a intentar?
          </button>
        </RuleLayout>
      );

    default:
      return (
        <RuleLayout>
          <Default setTransaction={setTransaction} btnCancel={btnCancel} />
        </RuleLayout>
      );
  }
};

const mapStateToProps = (state, props) => {
  return state.transaction;
};

export default connect(mapStateToProps, { setRules, setRegla })(
  TransactionRule
);
