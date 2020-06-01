import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLight = () => {
  return (
    <div className="Header_Container">
      <div className='HeaderLight'>
        <Link style={{ textDecoration: 'none', width: 'fit-content' }} to='/'>
          <h2 className='back'>🏡👈</h2>
        </Link>
      </div>
    </div>
  );
};

export default HeaderLight;
