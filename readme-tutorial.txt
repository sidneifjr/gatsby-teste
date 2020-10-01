- Criar novo projeto, baseado no starter disponível na url

gatsby new projectname starter-url

Ex.: gatsby new gatsby-bootcamp https://github.com/gatsbyjs/gatsby-starter-hello-world


- Dentro do projeto criado

npm run develop

-> Detalhes

1) A pasta 'pages' armazena todas as páginas estáticas que devem ser criadas.

Idealmente, cada página deve ser um arquivo js e importar um componente React.

"index.js" será a homepage do projeto.


2) Para links internos, use o módulo Link, ao invés do elemento âncora (a).

O módulo é otimizado de várias formas. Por exemplo, a URL no link será pré-carregada evitando um reload total da página.

Para links externos, no entanto, a âncora é apropriada.
