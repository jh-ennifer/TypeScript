import { converter } from "./convert";

type Conversao = {valor: number, tipo: "CtoF" | "FtoC"}

const resultados: Conversao[] = [
  { valor: 0, tipo: "CtoF" },
  { valor: 100, tipo: "CtoF" },
  { valor: 32, tipo: "FtoC" },
  { valor: 212, tipo: "FtoC" }
];

resultados.forEach(({ valor, tipo }) => {
  console.log(`${valor} ${tipo} → ${converter(valor, tipo)}`);
});
