import { Categoria, CATEGORIAS, Despesa } from "./tipos";
import { maiorDespesa, totalGasto } from "./despesas";

export function descricaoCategoria(categoria: Categoria): string {
  switch (categoria) {
    case "alimentação":
      return "Alimentação";

    case "transporte":
      return "Transporte";

    case "lazer":
      return "Lazer";

    case "moradia":
      return "Moradia";
  }
}

export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
  const matriz: number[][] = [];

  for (let i = 0; i < CATEGORIAS.length; i++) {
    const linha: number[] = [];

    for (let mes = 1; mes <= 12; mes++) {
      let total = 0;

      for (let j = 0; j < despesas.length; j++) {
        if (
          despesas[j].categoria === CATEGORIAS[i] &&
          despesas[j].mes === mes
        ) {
          total += despesas[j].valor;
        }
      }

      linha.push(total);
    }

    matriz.push(linha);
  }

  return matriz;
}