import React, { useState } from "react";
import { connect } from "react-redux";

const Rule = props => {
  const [regla, setRegla] = useState(props.rules[0]);
  const [apuntador, setApuntador] = useState(0);
  const [salir, setSalir] = useState(null);
  const nextRule = e => {
    setApuntador(apuntador + 1);
    apuntador == 0
      ? setRegla(props.rules[1])
      : setRegla(props.rules[apuntador]);
    console.log(apuntador + 1);
  };

  const goOut = e => {
    setSalir(true);
  };

  if (apuntador === props.rules.length) {
    return <h1>{props.success}</h1>;
  }

  if (salir) {
    return <h1>{props.fail}</h1>;
  }

  return (
    <div>
      <p>{regla}</p>
      <button onClick={nextRule}>Si</button>
      <button onClick={goOut}>No</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    rules: state.bank.reglas,
    success: state.bank.baseDeConocimiento.Success,
    fail: state.bank.baseDeConocimiento.Fallo
  };
};

export default connect(mapStateToProps)(Rule);
