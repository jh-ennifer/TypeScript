export enum TipoDado {
  D6 = 6,
  D12 = 12,
  D20 = 20,
}

export function lancaDado(input: String): String {
  // Converte o input para o enum correspondente
  	const faces = TipoDado[input as keyof typeof TipoDado];
	if (!faces) {
		return "Opção inválida!";
	}
	console.log("Você escolheu um dado de " + faces + " lados")
	return "Número sorteado: " + (Math.floor(Math.random() * faces) + 1);
}