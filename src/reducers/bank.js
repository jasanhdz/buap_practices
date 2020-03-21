const initialState = {
  reglas: [
    "¿Tiene una cuenta bancaria?",
    "¿Tiene una tarjeta?",
    "Ingresar Nip",
    "¿Nip Correcto?",
    "¿Cajero con saldo?",
    "Retirar dinero"
  ],
  baseDeConocimiento: {
    Fallo:
      "Lo sentimos no podemos proseguir al uso del cajero, alguna de las reglas no se cumplio",
    Success: "Excelente el uso del cajero se realizó con éxito"
  }
};

function bank(state = initialState, action) {
  switch (action.type) {
    case "Fallo":
      return { ...state };
    default:
      return state;
  }
}

export default bank;
