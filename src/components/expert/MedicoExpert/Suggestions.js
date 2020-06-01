import React from 'react'
import { useSelector } from 'react-redux';

export default function Suggestions({ closeSugestion, suggestions }) {
  const recipes = useSelector(state => state.medico.recipe)
  const specialists = useSelector(state => state.medico.specialist)
  const disease = useSelector(state => state.medico.disease)
  if (recipes.length && specialists.length) {
    return (
      <div id="diagnostic" className="sugestions_results" ref={suggestions}>
        <h2 className="sugestion__title">{disease || "Gripe"}</h2>
        <div className="Sugestions">
          <span onClick={closeSugestion} className="close">X</span>
          <section className="Recipes_Container">
            <article className="recipe">
              <p className="Lista">Medicina: </p>
              {recipes.map(recipe => <li style={{ margin: 0 }}>{recipe}</li>)}
            </article>
            <article className="specialist">
              <p className="Lista">Especialistas: </p>
              {specialists.map(specialist => <li style={{ margin: 0 }}>{specialist}</li>)}
            </article>
          </section>
        </div>
      </div>
    )
  }
  return <div ref={suggestions}></div>
}
