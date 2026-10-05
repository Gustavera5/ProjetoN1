export type Categoria =
  | "alimentação"
  | "transporte"
  | "lazer"
  | "moradia";

export interface Despesa {
  readonly id: number;
  descricao: string;
  valor: number;
  categoria: Categoria;
  mes: number;

  // A observação é opcional porque nem toda despesa precisa de uma informação extra.
  observacao?: string;
}

export const CATEGORIAS: Categoria[] = [
  "alimentação",
  "transporte",
  "lazer",
  "moradia"
];