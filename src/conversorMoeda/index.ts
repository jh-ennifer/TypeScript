import { converter } from "./conversor";

type Conversao = {valor: number, tipo: "RtoD" | "DtoR"}

const resultados: Conversao[] = [
  { valor: 1, tipo: "DtoR" },
  { valor: 1152.25, tipo: "RtoD" },
  { valor: 56.80, tipo: "RtoD" },
  { valor: 89.54, tipo: "DtoR" }
];

resultados.forEach(({ valor, tipo }) => {
  if(tipo === 'DtoR')
  	console.log(`US$${valor} → R$${converter(valor, tipo)}`);
  else 
  	console.log(`R$${valor} → US$${converter(valor, tipo)}`);
});
