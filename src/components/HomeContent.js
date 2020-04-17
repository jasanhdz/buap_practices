import React, { useState } from 'react';
import Article from '../components/Article';
import data from '../cards.json';

const HomeContent = () => {
  const [cards] = useState(data.cards);
  console.log(cards);
  return (
    <div className='Home__container'>
      <h1 className='Home__title'>Tecnologías emergentes para las Tic's</h1>
      {cards.reverse().map((card, idx) => (
        <Article
          key={idx}
          subtitle={card.subtitle}
          description={card.description}
          page={card.page}
          respositorio={card.respositorio}
        />
      ))}
    </div>
  );
};

export default HomeContent;
