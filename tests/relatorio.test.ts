import { describe, expect, it } from "vitest";
import {
  descricaoCategoria,
  matrizCategoriaMes
} from "../src/relatorio";
import { Despesa } from "../src/tipos";

describe("descricaoCategoria", () => {
  it("retorna Alimentação", () => {
    expect(descricaoCategoria("alimentação")).toBe("Alimentação");
  });

  it("retorna Moradia", () => {
    expect(descricaoCategoria("moradia")).toBe("Moradia");
  });
});

describe("matrizCategoriaMes", () => {
  it("cria uma matriz com 4 linhas e 12 colunas", () => {
    const matriz = matrizCategoriaMes(despesas);

    expect(matriz).toHaveLength(4);

    for (const linha of matriz) {
      expect(linha).toHaveLength(12);
    }
  });

  it("coloca os valores nos meses corretos", () => {
    const matriz = matrizCategoriaMes(despesas);

    expect(matriz[0][0]).toBe(100);
  });
});