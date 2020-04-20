import React from 'react';

export const Default = ({ setTransaction, btnCancel }) => {
  return (
    <>
      <button className='btn primary' onClick={() => setTransaction(true)}>
        Si
      </button>
      <button className='btn primary' onClick={btnCancel}>
        No
      </button>
    </>
  );
};
