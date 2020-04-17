import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLight = () => {
  return (
    <div className='HeaderLight'>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <h2 className='back'>🏡👈</h2>
      </Link>
    </div>
  );
};

export default HeaderLight;
