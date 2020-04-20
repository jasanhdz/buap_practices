import React from 'react';
import Rule from '../components/expert/Rule';
import HeaderLight from '../components/expert/HeaderLight';
import Footer from '../components/Footer';

const Bank = (props) => {
  return (
    <div className='Container'>
      <HeaderLight />
      <h1 className='Home__title'>Sistema experto Bancario</h1>
      <Rule />
      <div className='bottom'>
        <Footer />
      </div>
    </div>
  );
};

export default Bank;
