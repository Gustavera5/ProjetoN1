Controle de Gastos do Mês:
Projeto individual desenvolvido em TypeScript para registrar despesas de um mês e gerar um relatório de gastos organizado por categoria.

Como instalar:
Clone o repositório e entre na pasta do projeto.

Depois, instale as dependências no terminal com:

npm install
npm init -y npm install -D typescript @types/node tsx npx tsc --init
npm install -D vitest

Para executar os testes:

npm test

Para executar o programa principal:

npm run dev

Estrutura do projeto:
src/tipos.ts: contém a interface Despesa, o tipo Categoria e o array CATEGORIAS.

src/despesas.ts: contém as funções para adicionar, remover, filtrar e calcular despesas.

src/relatorio.ts: contém as funções responsáveis por gerar e formatar o relatório.

src/index.ts: programa principal, responsável por criar as despesas de exemplo e exibir o relatório.

testes/despesas.test.ts: contém os testes das funções relacionadas às despesas.

package.json: contém as informações do projeto, os scripts e as dependências utilizadas.

tsconfig.json: configura o compilador TypeScript e define opções como strict: true.

.gitignore: define arquivos e pastas que não devem ser enviados para o Git, como node_modules/ e dist/.

Registro de uso de IA:

A IA foi utilizada como ferramenta de apoio durante o desenvolvimento. Os testes foram elaborados antes das implementações das funções da Etapa 2, conforme o modo de trabalho proposto pela atividade. As implementações foram analisadas e revisadas antes de serem utilizadas.

Reflexão:
Durante o desenvolvimento, utilizei a IA como ferramenta de apoio para implementar as funções do projeto. Na Etapa 2, os testes foram criados antes das implementações para verificar se cada função atendia aos requisitos. Durante a revisão, observei principalmente se as funções estavam alterando ou não os arrays recebidos. Um dos testes adicionados verifica especificamente que adicionarDespesa não altera o array original. Também foram utilizados casos de borda, como uma lista vazia, valores inválidos e um identificador que não existe. As implementações das funções de relatório também foram revisadas para garantir que seguissem as regras da atividade, principalmente o uso de switch e dos laços for na criação da matriz.

Aprendi na prática como utilizar o Git e o GitHub em um projeto maior, além dos testes em TypeScript e algumas boas práticas do Visual Studio Code.