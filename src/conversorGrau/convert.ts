export function converter(valor :number, tipo :String) {
  if (tipo === "CtoF") {
    return (valor * 9) / 5 + 32;
  } else if (tipo === "FtoC") {
    return ((valor - 32) * 5) / 9;
  } else {
    throw new Error("Tipo de conversão inválido!");
  }
}