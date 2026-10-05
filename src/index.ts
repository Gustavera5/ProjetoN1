import { Despesa } from "./tipos";
import { adicionarDespesa } from "./despesas";
import { formatarRelatorio } from "./relatorio";

const despesas: Despesa[] = [
  {
    id: 1,
    descricao: "Mercado",
    valor: 250,
    categoria: "alimentação",
    mes: 1
  },
  {
    id: 2,
    descricao: "Ônibus",
    valor: 120,
    categoria: "transporte",
    mes: 1
  },
  {
    id: 3,
    descricao: "Cinema",
    valor: 80,
    categoria: "lazer",
    mes: 2
  },
  {
    id: 4,
    descricao: "Aluguel",
    valor: 1200,
    categoria: "moradia",
    mes: 2
  },
  {
    id: 5,
    descricao: "Restaurante",
    valor: 150,
    categoria: "alimentação",
    mes: 3
  },
  {
    id: 6,
    descricao: "Combustível",
    valor: 200,
    categoria: "transporte",
    mes: 3
  },
  {
    id: 7,
    descricao: "Jogo",
    valor: 100,
    categoria: "lazer",
    mes: 4
  },
  {
    id: 8,
    descricao: "Conta de luz",
    valor: 180,
    categoria: "moradia",
    mes: 4
  }
];

const novasDespesas = adicionarDespesa(despesas, {
  id: 9,
  descricao: "Padaria",
  valor: 50,
  categoria: "alimentação",
  mes: 5
});

console.log(formatarRelatorio(novasDespesas));