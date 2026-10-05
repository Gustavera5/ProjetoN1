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

export function formatarRelatorio(despesas: Despesa[]): string {
  const matriz = matrizCategoriaMes(despesas);

  let relatorio = "RELATÓRIO DE GASTOS\n";
  relatorio += "===================\n";

  for (let i = 0; i < CATEGORIAS.length; i++) {
    let totalCategoria = 0;

    for (let mes = 0; mes < 12; mes++) {
      totalCategoria += matriz[i][mes];
    }

    const nome = descricaoCategoria(CATEGORIAS[i]);

    relatorio += nome.padEnd(15, " ");
    relatorio += " R$ ";
    relatorio += totalCategoria.toFixed(2);
    relatorio += "\n";
  }

  relatorio += "-------------------\n";

  relatorio += "TOTAL GERAL".padEnd(15, " ");
  relatorio += " R$ ";
  relatorio += totalGasto(despesas).toFixed(2);
  relatorio += "\n";

  const maior = maiorDespesa(despesas);

  if (maior === undefined) {
    relatorio += "MAIOR DESPESA: nenhuma";
  } else {
    relatorio += "MAIOR DESPESA: ";
    relatorio += maior.descricao;
    relatorio += " - R$ ";
    relatorio += maior.valor.toFixed(2);
  }

  return relatorio.toUpperCase();
}