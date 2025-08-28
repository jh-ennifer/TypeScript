// Conversão realizada com base no valor do dólar no dia 28/09/2025

export function converter(valor: number, tipo: String): String {
  if (tipo === "RtoD")
    return (valor * 0.18).toFixed(2);
	return (valor * 5.42).toFixed(2);
}