export type tiposDado = "D6" | "D12" | "D20"

export function lancaDado(tipoDado: tiposDado): String{
	let faces: number = Number(tipoDado.slice(1))
	if(faces != 6 && faces != 12 && faces != 20){
		return "Opção inválida!"
	}
	console.log("Você escolheu um dado de " + faces + " lados")
	return "Número sorteado: " + (Math.floor(Math.random() * faces) + 1);
}