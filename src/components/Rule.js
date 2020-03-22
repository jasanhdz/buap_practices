import React from "react";
import { connect } from "react-redux";
import { setApuntador, setRegla, setSalir } from "../actions/bankActions";

const Rule = props => {
  const nextRule = e => {
    props.setApuntador(props.apuntador + 1);
    props.setRegla(props.rules[props.apuntador]);
    console.log(props.apuntador);
  };
  const goOut = e => {
    props.setSalir(true);
  };

  if (props.apuntador === props.rules.length) {
    return <h1>{props.success}</h1>;
  }

  if (props.salir) {
    return <h1>{props.fail}</h1>;
  }

  return (
    <div>
      <p>{props.rule}</p>
      <button onClick={nextRule}>Si</button>
      <button onClick={goOut}>No</button>
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
