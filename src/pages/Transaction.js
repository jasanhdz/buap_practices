import React from 'react';
import Rule from '../components/expert/TransactionRule';
import HeaderLight from '../components/expert/HeaderLight';
import Footer from '../components/Footer';

const Transaction = (props) => {
  return (
    <div className='Container__Center'>
      <HeaderLight />
      <div className='Card_container'>
        <h1 className='Home__title'>Sistema experto Transación</h1>
        <Rule />
      </div>
      <Footer />
    </div>
  );
};

export default Transaction;
