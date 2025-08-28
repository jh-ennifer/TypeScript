import { calcula, Operador } from "./operacoes"
import { read, close } from "../util/readline";



async function main() {
  const primeiro: number = Number(await read(""));
  const operador: Operador = (await read("")) as Operador;
  const segundo: number = Number(await read(""));

  console.log(calcula(primeiro, operador, segundo));

  close();
}

main();