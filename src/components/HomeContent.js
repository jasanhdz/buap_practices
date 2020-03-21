import React from "react";

const HomeContent = () => {
  return (
    <div className="Home__container">
      <h1 className="Home__title">Tecnologías emergentes para las Tic's</h1>
      <div className="Article__container">
        <article className="Article">
          <h2 className="Home__subtitle">Sistema experto Bancario</h2>
          <p>
            Usando el ejemplo del cajero para codificar las reglas generales
          </p>
          <button className="btn primary">práctica</button>
          <button className="btn primary">repositorio</button>
        </article>
      </div>
    </div>
  );
};

export default HomeContent;
