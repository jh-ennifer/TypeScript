function converter(valor :number, tipo :String) {
  if (tipo === "CtoF") {
    return (valor * 9) / 5 + 32;
  } else if (tipo === "FtoC") {
    return ((valor - 32) * 5) / 9;
  } else {
    throw new Error("Tipo de conversão inválido!");
  }
}

type Conversao = {valor: number, tipo: "CtoF" | "FtoC"}

const resultados :Conversao[] = [
  { valor: 0, tipo: "CtoF" },
  { valor: 100, tipo: "CtoF" },
  { valor: 32, tipo: "FtoC" },
  { valor: 212, tipo: "FtoC" }
];

resultados.forEach(({ valor, tipo }) => {
  console.log(`${valor} ${tipo} → ${converter(valor, tipo)}`);
});
