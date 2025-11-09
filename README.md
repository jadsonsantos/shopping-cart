# Carrinho de Compras com ReactJS

Este é um projeto de carrinho de compras desenvolvido com ReactJS. Ele permite listar produtos na tela, buscar produtos consumindo a API do Mercado Livre, adicionar produtos e remover produtos do carrinho.

![Alt text](public/image.png)

## Funcionalidades

- Listagem de produtos: exibe uma lista de produtos obtidos da API do Mercado Livre.
- Busca de produtos: permite pesquisar produtos com base em palavras-chave, consumindo a API do Mercado Livre para obter os resultados.
- Adição de produtos ao carrinho: permite adicionar produtos ao carrinho de compras.
- Remoção de produtos do carrinho: possibilita remover produtos do carrinho de compras.

## Tecnologias utilizadas

- ReactJS: biblioteca JavaScript para construção de interfaces de usuário.
- HTML5: linguagem de marcação para estruturar o conteúdo da aplicação.
- CSS3: linguagem de estilo para estilizar a interface do usuário.
- API do Mercado Livre: utilizada para obter dados de produtos.

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem instalado com o Node.js) ou [yarn](https://yarnpkg.com/)

Para verificar se você tem o Node.js e npm instalados, execute no terminal:

```bash
node --version
npm --version
```

## Instalação

1. Clone o repositório ou baixe o projeto:

```bash
git clone <url-do-repositório>
cd shopping-cart
```

2. Instale as dependências do projeto:

```bash
npm install
```

ou se estiver usando yarn:

```bash
yarn install
```

## Como rodar o projeto

Após instalar as dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
npm start
```

ou se estiver usando yarn:

```bash
yarn start
```

O projeto será aberto automaticamente no navegador em `http://localhost:3000`.

A página será recarregada automaticamente sempre que você fizer alterações no código.

## Scripts disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo em modo de desenvolvimento. Abre [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

### `npm test`

Executa os testes do projeto em modo interativo.

### `npm run build`

Cria uma versão otimizada para produção do aplicativo na pasta `build`. Esta versão está pronta para ser implantada.

### `npm run eject`

**Atenção: Esta operação é irreversível!** Remove a dependência única do projeto e copia todos os arquivos de configuração e dependências transitivas (webpack, Babel, ESLint, etc) diretamente no projeto.

### `npm run format`

Formata automaticamente todos os arquivos JavaScript, JSX e CSS do projeto usando o Prettier.

### `npm run format:check`

Verifica se os arquivos estão formatados corretamente sem fazer alterações.

## ESLint e Testes

O projeto está configurado para executar o ESLint em todos os arquivos, incluindo arquivos de teste (`.test.js`, `.test.jsx`).

**Configuração:**
- O ESLint está configurado com ambiente Jest para arquivos de teste
- Arquivos de teste têm regras mais flexíveis (ex: ordem de imports desabilitada)
- A regra `react/react-in-jsx-scope` está desabilitada globalmente (React 17+ não requer importar React)

**Arquivos de teste:**
- O ESLint reconhece automaticamente arquivos de teste pelos padrões:
  - `**/*.test.js`
  - `**/*.test.jsx`
  - `**/__tests__/**/*.js`
  - `**/__tests__/**/*.jsx`

## Estrutura do projeto

```
shopping-cart/
├── public/                 # Arquivos públicos estáticos
│   ├── index.html         # HTML principal
│   └── ...
├── src/
│   ├── api/               # Funções de API
│   │   └── fetchProducts.js
│   ├── components/        # Componentes React
│   │   ├── Cart/
│   │   ├── CartButton/
│   │   ├── CartItem/
│   │   ├── Header/
│   │   ├── Loading/
│   │   ├── ProductCard/
│   │   ├── Products/
│   │   ├── SearchBar/
│   │   └── SearchResults/
│   ├── contexts/          # Context API
│   │   ├── AppContext.js
│   │   └── Provider.jsx
│   ├── utils/             # Funções utilitárias
│   │   └── formatCurrency.js
│   ├── App.jsx            # Componente principal
│   ├── App.css
│   ├── index.jsx          # Ponto de entrada
│   └── index.css
├── .editorconfig          # Configuração do editor
├── .eslintrc.json         # Configuração do ESLint
├── .gitattributes         # Configuração de line endings do Git
├── .prettierrc            # Configuração do Prettier
├── package.json           # Dependências e scripts
└── README.md
```

## API utilizada

Este projeto utiliza a [API do Mercado Livre](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas) para buscar produtos. A API é pública e não requer autenticação para consultas básicas.

Endpoint utilizado:
- `https://api.mercadolibre.com/sites/MLB/search?q={query}`

Onde `{query}` é o termo de busca do produto.

## Troubleshooting

### Erro de line endings (CRLF vs LF)

Se você ver erros como:
```
Expected linebreaks to be 'LF' but found 'CRLF'
```

Isso acontece porque o projeto está configurado para usar line endings Unix (LF), mas o Windows usa CRLF por padrão.

**Solução:**

1. Execute o comando de formatação para corrigir todos os arquivos:

```bash
npm run format
```

ou manualmente:

```bash
npx prettier --write "src/**/*.{js,jsx,css}"
```

O projeto já está configurado com `.editorconfig` e `.prettierrc` para garantir que todos os arquivos usem LF. Se você usar um editor compatível com EditorConfig (como VS Code), ele aplicará automaticamente as configurações.

### Aviso do Browserslist (caniuse-lite desatualizado)

Se você ver o aviso:
```
Browserslist: caniuse-lite is outdated
```

Execute o seguinte comando para atualizar:

```bash
npx update-browserslist-db@latest
```

### Avisos de depreciação do Webpack Dev Server

Se você ver avisos como:
```
DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated
DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated
```

Esses são avisos conhecidos do `react-scripts 5.0.1` e **não impedem o funcionamento do projeto**. Eles aparecem porque o `react-scripts` usa uma versão do Webpack Dev Server que tem essas opções depreciadas. O projeto continuará funcionando normalmente.

### Problemas comuns

**O projeto não inicia:**
- Verifique se todas as dependências foram instaladas: `npm install`
- Verifique se a porta 3000 está disponível
- Tente limpar o cache: `npm start -- --reset-cache`

**Erro ao instalar dependências:**
- Tente deletar a pasta `node_modules` e o arquivo `package-lock.json`, depois execute `npm install` novamente
- Verifique se você está usando uma versão compatível do Node.js (14 ou superior)

**A página não carrega no navegador:**
- Verifique se o servidor está rodando corretamente
- Tente acessar manualmente: `http://localhost:3000`
- Verifique se há erros no console do navegador
