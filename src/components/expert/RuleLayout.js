import React from 'react';
import { connect } from 'react-redux';

const RuleLayout = ({ children, rule, subtitle }) => {
  return (
    <div className='Article__container'>
      <article className='Article'>
        <h2 className='Subtitle'>{subtitle ? subtitle : rule}</h2>
        {children}
      </article>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return state.transaction;
};

export default connect(mapStateToProps)(RuleLayout);
