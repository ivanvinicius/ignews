### Notas de ajuda

1 Pasta Public
Onde as imagens e o favicon devem estar. Para carregar imagens dentro do projeto
basta indicar o seguinte caminho no atríbuto src da img da seguinte forma:
/images/logo.svg

2 Pasta SRC
A pasta SRC não existe de forma padrão em um projeto Nextjs, mas é possível
cria-la para que haja uma melhor organização no código.

  2.1 Pasta Pages
  A pasta PAGES pode estar em apenas dois locais da nossa aplicação, sendo na raiz
  do projeto, ou diretamente dentro da pasta SRC.

  2.1.1 File System Routing
  Em projetos Nextjs, cada arquivo presente dentro da pasta PAGES é convertido em
  uma rota da aplicação, existem excessões como o _app.tsx e _document.tsx, que 
  serão abordadas a seguir.

    2.1.1.1 Export como default
    Quando criamos um componente dentro da pasta PAGES, o mesmo deve ser exportado
    como DEFAULT.

  2.1.2 Arquivo pages/_app.tsx
  O arquivo _app.tsx é o primeiro arquivo a ser carregado pela aplicação, e cada
  alteração de tela no browser o mesmo é recarregado de forma completa. Nele devem 
  estar contidas todas as informações de PROVIDERS (hooks wrappers). Se em algum 
  momento existir um componente que deve estar presente em todas as abas da 
  aplicação, o mesmo também deverá estar presente dentro deste arquivo, um exemplo 
  prático seria o header.tsx. No caso do ignews o header está presente em todas 
  as abas então o mesmo deve ser carregado dentro do app.

  2.1.3 Arquivo pages/_document.tsx
  O arquivo _document.tsx funciona de forma semelhante ao _app.tsx, e também pode
  ser comparado ao arquivo index.html dentro da pasta PUBLIC em projetos React
  comuns. Nesse arquivo devem estar contidas informações que serão carregadas
  APENAS UMA VEZ na aplicação, um exemplo prático disso seriam as fontes. O código
  dentro do arquivo deve ser escrito no formato de CLASS, pois ainda não há um 
  suporte muito legal a FUNCTIONAL COMPONENTS.

3 API ROUTES
Entre a camada do browser e a camada do backend, existe a camada do Nextjs, que
executa o servidor Node. Essa camanda permite que em alguns casos um backend
dentro do frontend seja criado. A API ROUTE pode conter variáveis ambiente que 
não estarão disponíveis para o cliente. Cada arquivo dentro da pasta /pages/api
pode ser comparado a uma rota do backend. Todas as API ROUTES são executadas 
utilizando o conceito de Serverless, dessa forma, a cada requisição executada 
uma nova estância é criada, divergindo do que acontece com as sessões nos métodos
mais convencionais.

  3.1 Parâmentros nas rotas
  Ao nomear os arquivos das rotas é possível indicar se a mesma vai receber algum
  parâmentro ou não. Vamos imaginar que desejamos listar todos os usuários da 
  aplicação, para isso basta criar um arquivo /api/users.ts. Caso seja necessário
  fazer uma busca por um usuário específico, o arquivo poderia se chamar 
  /api/[userId].ts, e para resgatar o valor dentro do arquivo seria da seguinte
  forma: const {userId} = request.query. Para obter-se acesso a vários parâmentros
  da rota ao mesmo tempo, o arquivo deve ser nomeado usando spread operator:
  /api/[...params].ts, onde os resultados do request.query formam um objeto de 
  parâmetros. 

4 Variáveis Ambiente
Devem estar disponíveis apenas para a parte backend do app. Dessa forma apenas as
API routes, os métodos Server Side Rendering e os métodos Get Static Props devem
visualizar as informações das variáveis. Pois as mesmas não devem ficar visíveis
para o cliente