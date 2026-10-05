import { describe, expect, it } from "vitest";
import {
  adicionarDespesa,
  removerDespesa
} from "../src/despesas";
const despesas: Despesa[] = [
  {
    id: 1,
    descricao: "Mercado",
    valor: 100,
    categoria: "alimentação",
    mes: 1
  }
];

describe("adicionarDespesa", () => {
  it("adiciona uma despesa", () => {
    const nova = {
      id: 2,
      descricao: "Cinema",
      valor: 50,
      categoria: "lazer" as const,
      mes: 2
    };

    const resultado = adicionarDespesa(despesas, nova);

    expect(resultado).toHaveLength(2);
  });

  it("não aceita valor menor ou igual a zero", () => {
    const nova = {
      id: 2,
      descricao: "Teste",
      valor: 0,
      categoria: "lazer" as const,
      mes: 2
    };

    expect(() => adicionarDespesa(despesas, nova)).toThrow();
  });

  it("não altera o array original", () => {
    const resultado = adicionarDespesa(despesas, {
      id: 2,
      descricao: "Cinema",
      valor: 50,
      categoria: "lazer",
      mes: 2
    });

    expect(despesas).toHaveLength(1);
    expect(resultado).toHaveLength(2);
  });

  it("não aceita mês fora de 1 a 12", () => {
    const nova = {
      id: 2,
      descricao: "Teste",
      valor: 50,
      categoria: "lazer" as const,
      mes: 13
    };

    expect(() => adicionarDespesa(despesas, nova)).toThrow();
  });
});

describe("removerDespesa", () => {
  it("remove uma despesa pelo id", () => {
    const resultado = removerDespesa(despesas, 1);

    expect(resultado).toHaveLength(0);
  });

  it("retorna uma cópia quando o id não existe", () => {
    const resultado = removerDespesa(despesas, 99);

    expect(resultado).toEqual(despesas);
    expect(resultado).not.toBe(despesas);
  });
});

describe("despesasDaCategoria", () => {
  it("retorna despesas da categoria", () => {
    const resultado = despesasDaCategoria(
      despesas,
      "alimentação"
    );

    expect(resultado).toHaveLength(1);
  });

  it("retorna lista vazia quando não há despesas da categoria", () => {
    const resultado = despesasDaCategoria(
      despesas,
      "moradia"
    );

    expect(resultado).toEqual([]);
  });
});