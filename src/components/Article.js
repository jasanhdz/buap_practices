import React from 'react';
import { Link } from 'react-router-dom';

const Article = (props) => {
  return (
    <div className='Article__container'>
      <article className='Article'>
        <h2 className='Home__subtitle'>{props.subtitle}</h2>
        <p>{props.description}</p>
        <Link to={props.page}>
          <button className='btn primary'>práctica</button>
        </Link>
        <Link to={props.respositorio} target='_blank'>
          <button className='btn primary'>repositorio</button>
        </Link>
      </article>
    </div>
  );
};
export default Article;
