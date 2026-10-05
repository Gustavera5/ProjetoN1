import { describe, expect, it } from "vitest";
import { adicionarDespesa } from "../src/despesas";
import { Despesa } from "../src/tipos";

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