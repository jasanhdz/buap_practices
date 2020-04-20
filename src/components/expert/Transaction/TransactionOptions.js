import React from 'react';

export const TransactionOptions = ({
  transactionType,
  transactionOption,
  setExtract,
  setDeposit,
  setBalance,
  btnCancel,
}) => {
  console.log(transactionType);
  return (
    <>
      <button
        className='btn primary'
        onClick={() =>
          transactionOption(transactionType.extraction, setExtract)
        }
      >
        Extraer 💸
      </button>
      <button
        className='btn primary'
        onClick={() => transactionOption(transactionType.deposit, setDeposit)}
      >
        Depositar 💰
      </button>
      <button
        className='btn primary'
        onClick={() =>
          transactionOption(transactionType.balance, setBalance, true)
        }
      >
        Saldo 👛
      </button>
      <button className='btn primary' onClick={btnCancel}>
        Salir 📤
      </button>
    </>
  );
};
