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
  },
  apuntador: 1,
  rule: "¿Tiene una cuenta bancaria?",
  salir: null
};

function bank(state = initialState, action) {
  switch (action.type) {
    case "SET_APUNTADOR":
      return { ...state, apuntador: action.payload };
    case "SET_REGLA":
      return { ...state, rule: action.payload };
    case "SET_SALIR":
      return { ...state, salir: action.payload };
    default:
      return state;
  }
}

export default bank;
