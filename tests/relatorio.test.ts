import { describe, expect, it } from "vitest";
import { descricaoCategoria } from "../src/relatorio";

describe("descricaoCategoria", () => {
  it("retorna Alimentação", () => {
    expect(descricaoCategoria("alimentação")).toBe("Alimentação");
  });

  it("retorna Moradia", () => {
    expect(descricaoCategoria("moradia")).toBe("Moradia");
  });
});