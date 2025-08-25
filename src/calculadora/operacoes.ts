export type Operador = "+" | "-" | "/" | "*" 

export function calcula(primeiroValor :number, operador: Operador, segundoValor: number) :String{
	let resultado :String = primeiroValor + operador + segundoValor + " = ";
	let calculo :Number = 0
	switch (operador) {
		case "+":
			calculo = primeiroValor + segundoValor
			resultado += String(calculo)
			break
		case "-":
			calculo = primeiroValor - segundoValor
			resultado += String(calculo)
			break
		case "/":
			if(segundoValor > 0){
				calculo = primeiroValor / segundoValor
				resultado += String(calculo)
				break
			}
			resultado = "Não foi possível realizar a operação, o divisor precisa ser maior que 0"
			break
		case "*":
			calculo = primeiroValor * segundoValor
			resultado += String(calculo)
			break
		default:
			resultado = "Não foi possível realizar a operação, operador inválido"
			break
	}
	return resultado;
}