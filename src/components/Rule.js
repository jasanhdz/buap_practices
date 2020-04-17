import React from "react";
import { connect } from "react-redux";
import { setApuntador, setRegla, setSalir } from "../actions/bankActions";

const Rule = props => {
  const reset = e => {
    props.setRegla(props.rules[0]);
    props.setApuntador(1);
    props.setSalir(null);
  };

  const nextRule = e => {
    props.setApuntador(props.apuntador + 1);
    props.setRegla(props.rules[props.apuntador]);
    console.log(props.apuntador);
  };
  const goOut = e => {
    props.setSalir(true);
  };

  if (props.apuntador === props.rules.length) {
    return (
      <div className="Article__container">
        <article className="Article">
          <h2 className="Home__subtitle">{props.success}</h2>
          <button onClick={reset} className="btn primary">
            ¿Volver a intentar?
          </button>
        </article>
      </div>
    );
  }

  if (props.salir) {
    return (
      <div className="Article__container">
        <article className="Article">
          <h2 className="Subtitle red">{props.fail}</h2>
          <button onClick={reset} className="btn primary">
            ¿Volver a intentar?
          </button>
        </article>
      </div>
    );
  }

  return (
    <div className="Article__container">
      <article className="Article">
        <h2 className="Subtitle">{props.rule}</h2>
        <button className="btn primary" onClick={nextRule}>
          Si
        </button>
        <button className="btn primary" onClick={goOut}>
          No
        </button>
      </article>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    rules: state.bank.reglas,
    success: state.bank.baseDeConocimiento.Success,
    fail: state.bank.baseDeConocimiento.Fallo,
    apuntador: state.bank.apuntador,
    rule: state.bank.rule,
    salir: state.bank.salir
  };
};

const mapDispatchToProps = {
  setApuntador,
  setRegla,
  setSalir
};

export default connect(mapStateToProps, mapDispatchToProps)(Rule);
