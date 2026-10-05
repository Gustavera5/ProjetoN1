Relatório:

Etapa 0:
Criei o repositório e linkei com o GitHub com "git remote add origin https://github.com/Gustavera5/Projeto-N1.git"

Criei o .gitignore e adicionei node_modules/ e dist/.

Instalei as dependências de desenvolvimento utilizando:

npm init -y
npm install -D typescript @types/node tsx
npx tsc --init

npm install -D vitest

No tsconfig.json, descomentei rootDir e outDir e mudei verbatimModuleSyntax para false.

Criei a pasta src com index.ts

Adicionei os scripts do vitest no package.json:

"scripts": {
    "test": "vitest run",
    "dev": "tsx src/index.ts"
  },



Criei os arquivos:
src/
  tipos.ts
  despesas.ts
  relatorio.ts
  index.ts

tests/
  despesas.test.ts
  relatorio.test.ts

Confirmei que "npm test" e "npx tsc --noEmit" rodam.

Fiz o primeiro commit e push.