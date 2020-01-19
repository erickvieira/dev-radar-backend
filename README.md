# dev-radar-backend
Backend da aplicação Dev Radar para a Semana Omnistack 10

## Instruções de uso
Após clonar o repositório, entre na pasta raíz e rode `npm i` ou `yarn` para instalar o projeto.  
  
Em seguida, crie um arquivo chamado `config.json` na pasta `src`. Esse arquivo será o container que irá armazenar as informações secretas de conexão com o cluster do MongoDB. Nessa mesma pasta, há também um arquivo chamado [config.template.json](https://github.com/erickvieira/dev-radar-backend/blob/master/src/config.template.json) cujo objetivo é exemplificar um objeto de conexão válido. Sinta-se a vontade para usá-lo como exemplo.  
> Note que para utilizar o MongoDB neste projeto, você precisa ter criado um cluster em sua conta pessoal.  
  
Uma vez instalado e devidamente configurado, você será capaz de rodá-lo através do comando `npx nodemon src/index.js` ou `yarn dev`.  
  
Para testar as rotas da aplicação, há alguns arquivos de exemplo na pasta `requests`. Eles foram criados para rodarem na extensão [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) do [Visual Studio Code](https://code.visualstudio.com). Se preferir utilizar outras ferramentas, pode ler esses arquivos e construir suas próprias requisições.

## Licença
[MIT](https://opensource.org/licenses/MIT) © [Erick Vieira](erickvieira.dev)