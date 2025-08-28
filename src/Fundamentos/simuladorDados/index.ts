import { read, close } from "../../util/readline";
import { lancaDado } from "./sorteia";

async function main() {
  const tipoDado: String = await read("Escolha um tipo de dado (6, 12 ou 20 faces): ");
  console.log(lancaDado(tipoDado))
  close();
}

main();