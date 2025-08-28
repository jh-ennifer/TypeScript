import { read, close } from "../../util/readline";
import { tiposDado, lancaDado } from "./sorteia";

async function main() {
  const tipoDado: tiposDado = await read("Escolha um tipo de dado (6, 12 ou 20 faces): ") as tiposDado;
  console.log(lancaDado(tipoDado))
  close();
}

main();