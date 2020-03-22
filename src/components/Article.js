import React from "react";
import { Link } from "react-router-dom";

const Article = () => {
  return (
    <div className="Article__container">
      <article className="Article">
        <h2 className="Home__subtitle">Sistema experto Bancario</h2>
        <p>Usando el ejemplo del cajero para codificar las reglas generales</p>
        <Link to="/bank_expert">
          <button className="btn primary">práctica</button>
        </Link>
        <Link to="//github.com/JasanHdz/buap_practices" target="_blank">
          <button className="btn primary">repositorio</button>
        </Link>
      </article>
    </div>
  );
};
export default Article;
