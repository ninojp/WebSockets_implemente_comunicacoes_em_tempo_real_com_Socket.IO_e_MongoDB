# Curso Alura WebSockets: implemente comunicações em tempo real com Socket.IO e MongoDB

## Aula 01 Criando o Alura Docs

### Aula 01 - Apresentação - Video 1

Nesta aula, o **instrutor** Antônio Evaldo apresenta o objetivo do curso de WebSockets, que é ensinar uma nova forma de desenvolver aplicações web utilizando esse protocolo. Ele explica que o WebSockets permite a comunicação em tempo real entre cliente e servidor, sendo útil em aplicações como bate-papo em tempo real e jogos online. O projeto do curso será o AluraDocs, onde será possível adicionar, editar e excluir documentos de JavaScript, Node e Socket.IO. É recomendado ter conhecimento prévio em JavaScript para back-end e ter feito o curso de Node.js com Express e MongoDB.

### Aula 01 - WebSockets e HTTP - Video 2

Nesta aula, foi apresentado o exemplo da aplicação AluraDocs, onde duas amigas, Eduarda e Juliana, compartilham conhecimentos de programação. Foi destacado o problema de comunicação e sincronização de informações que ocorre no protocolo HTTP, onde as alterações feitas por uma pessoa podem ser sobrescritas por outra. Foi introduzido o protocolo WebSockets como solução para permitir alterações em tempo real, com uma comunicação baseada em eventos e bidirecional entre cliente e servidor. Foi ressaltado que o WebSockets é mais útil em casos de interação em tempo real, como em jogos online, enquanto o HTTP pode ser mantido para outros casos.

### Aula 01 - Criando o servidor - Video 3

Nesta aula, começamos a desenvolver as funcionalidades do AluraDocs. Instalamos o Express e configuramos um servidor Node básico. Utilizamos o método express.static para mostrar as páginas HTML do projeto. Aprendemos a utilizar o nodemon para reiniciar automaticamente o servidor ao fazer alterações no projeto. Agora estamos prontos para implementar as primeiras funcionalidades do AluraDocs utilizando o protocolo WebSockets.

### Aula 01 - Utilizando o Socket.IO - Video 4

Nesta aula, aprendemos a utilizar o protocolo WebSockets no nosso projeto, utilizando a biblioteca Socket.IO. Instalamos o Socket.IO, criamos um servidor HTTP e conectamos o servidor com o Socket. No lado do front-end, adicionamos o script do Socket.IO na página e conectamos o cliente ao servidor. Testamos a conexão e verificamos que tudo funcionou corretamente.

Devemos colocar a tag script <script src="/socket.io/socket.io.js"></script> na página HTML que queremos que seja conectada com o servidor. Assim, uma função io será disponibilizada no lado do cliente.

Em seguida, devemos executar io(), e um evento chamado “connection” será automaticamente emitido para o servidor.

O arquivo socket.io.js do atributo src acima será disponibilizado quando o servidor do Socket.IO estiver rodando. Em seguida, executando a função io() no lado do front-end, para cada cliente será emitido o evento “connection” para o servidor.

### Aula 01 - Conclusão - Nessa aula, você aprendeu como

Diferenciar o protocolo HTTP do WebSockets:

O protocolo HTTP trabalha com o modelo requisição-resposta, que não é adequado para aplicações quando queremos criar uma comunicação bidirecional e em tempo real entre cliente e servidor. Para esses casos, utilizamos o protocolo WebSockets.
Criar um servidor Socket.IO com Express e conectar um cliente:

Você pode sempre consultar o passo a passo da documentação, na seção Get Started.
Escutar o evento de conexão do cliente:

Utilizamos o método io.on(), que recebe como primeiro parâmetro o nome do evento (por exemplo, “connection”) e como segundo parâmetro uma função callback, que será executada assim que o evento for escutado.

## Aula 02 Trabalhando com Socket.IO

### Aula 02 Obtendo id do socket - Video 1

Nesta aula, aprendemos a fazer a conexão de um cliente com o servidor utilizando o Socket.IO. Foi explicado que o socket disponibiliza um identificador único (id) para cada conexão. Ao abrir o documento em outra aba do navegador, é gerado outro id. O objetivo proposto foi fazer com que o que for digitado por um cliente apareça em tempo real para outro cliente. Para isso, foi necessário separar o código do arquivo servidor.js em outro arquivo chamado socket-back.js e exportar a constante io. Ao reiniciar o servidor, foi possível observar que a mensagem de cliente conectado foi exibida duas vezes devido às duas abas abertas no documento.html.

### Aula 02 Emitindo eventos - Video 2

Nesta aula, aprendemos a estabelecer a comunicação entre clientes do Socket.IO. Iniciamos ajustando o arquivo JavaScript relacionado à página HTML para capturar os valores digitados pelos clientes no campo de texto. Em seguida, identificamos o elemento HTML do campo de texto no arquivo HTML e o capturamos usando JavaScript. Utilizamos o evento "keyup" para executar uma função callback sempre que o usuário soltar uma tecla no campo de texto. Testamos a função exibindo mensagens no console do navegador. Por fim, atualizamos a função para exibir o texto atualizado no campo de texto no console do navegador.

Você aprendeu como emitir o seu primeiro evento no Socket.IO com o método emit()!  
Para isso, utilizamos esse método do lado do cliente, para em seguida poder escutá-lo do lado do servidor com o método on().  
Também vimos que os eventos do Socket.IO podem carregar dados no segundo parâmetro do método emit(). No nosso caso, enviamos o texto do editor, um dado do tipo string. Mas além desse, quais outros tipos de dados eu posso enviar junto com os eventos?  
O Socket.IO permite que qualquer dado serializável do JavaScript possa ser enviado junto com um evento. Um dado serializável é um dado que pode ser convertido em um determinado formato e, posteriormente, pode ser convertido de volta para sua forma original. Chamamos a recuperação do dado de desserialização.  
O JavaScript possui os métodos nativos JSON.stringify() e JSON.parse() para, respectivamente, serializar e desserializar diversos tipos de dados, como os tipos primitivos, arrays e objetos. Alguns tipos de dados, como undefined, Function, Symbol, Infinity, NaN, entre outros, não são serializados corretamente com estes métodos, pois não são dados aceitos no formato JSON.

### Aula 02 Do servidor para os clientes - Video 3

Nesta aula, aprendemos a enviar informações simultaneamente para todos os clientes conectados a uma página de documento utilizando o método io.emit() no servidor. Também aprendemos a evitar que o texto seja enviado para o cliente que o digitou, utilizando o método socket.broadcast.emit(). Além disso, atualizamos a interface em tempo real para exibir o texto digitado pelos clientes.

### Aula 02 Organizando arquivos - Video 4

Nesta aula, aprendemos a melhorar a organização dos arquivos do projeto. Criamos um novo arquivo chamado socket-front-documento.js na pasta "public" e movemos a primeira linha do código de documento.js para esse novo arquivo. Em seguida, criamos uma função emitirTextoEditor em socket-front-documento.js para substituir o socket.emit em documento.js. Também criamos uma função atualizaTextoEditor em documento.js para substituir o código textoEditor.value = texto e exportamos essa função. Por fim, organizamos o socket.on movendo-o para socket-front-documento.js e chamamos a função atualizaTextoEditor dentro dele. Com essa refatoração, conseguimos separar as responsabilidades dos arquivos e obter uma melhor organização.

### Aula 02 - Conclusão - Nessa aula, você aprendeu como

Emitir seu primeiro evento a partir do cliente:

No front-end, utilizamos socket.emit() para emitir o evento "texto_editor" para o servidor, junto com o texto que foi digitado.
Emitir um evento para vários clientes a partir do servidor:

No back-end, com io.emit(), podemos emitir um evento para todos os clientes ou, com socket.broadcast.emit(), podemos emitir para todos os clientes, exceto o cliente que está emitindo o evento.
Organizar melhor os arquivos por responsabilidade:

No front-end, deixamos um arquivo responsável por lidar com as manipulações do HTML (documento.js) e outro responsável para lidar com as funções do Socket.IO (socket-front-documento.js).

## Aula 03 Avançando na Comunicação

### Aula 03 Salas do Socket.IO - Video 1

Nesta aula, aprendemos a implementar comunicações em tempo real utilizando WebSockets e Socket.IO. Foi abordado o conceito de salas no Socket.IO, onde é possível enviar informações apenas para os clientes que estão na mesma sala. Foi feita uma correção na página para exibir o nome do documento em que o cliente está conectado. Também foi criada uma função para selecionar o documento e emitir o evento correspondente. No lado do servidor, foi adicionada uma função para escutar o evento e colocar o cliente em uma sala com o nome do documento. Por fim, o código foi refinado para enviar o texto apenas para os clientes na mesma sala.

### Aula 03 Enviando para as salas corretas - Video 2

Nesta aula, aprendemos a enviar informações para sockets específicos em uma sala do Socket.IO. Fizemos alterações no código para pegar o nome da sala dinamicamente. Também adicionamos o parâmetro nomeDocumento na função emitirTextoEditor e aprendemos a enviar múltiplas informações para um evento. Por fim, desestruturamos o objeto no socket-back.js para pegar diretamente as propriedades texto e nomeDocumento.  
Mais detalhes em [Socket.IO Rooms](https://socket.io/docs/v4/rooms/)

### Aula 03 Guardando os dados localmente - Video 3

Nesta aula, aprendemos a guardar os dados localmente em uma aplicação utilizando Node.js. Criamos uma lista de documentos, onde cada documento é representado por um objeto com propriedades de nome e texto. Implementamos uma função chamada "encontrarDocumento" que utiliza o método "find()" do JavaScript para buscar o documento com o nome correspondente. Ao selecionar um documento, o texto é enviado de volta para os clientes e também é impresso no console.

### Aula 03 Enviando de volta para o cliente - Video 4

Nesta aula, aprendemos a enviar o texto de um documento de volta para o cliente no front-end utilizando o Socket.IO. Utilizamos a emissão de eventos do servidor para o cliente, onde o servidor emite um evento de volta para o front-end com o texto do documento. Também aprendemos a utilizar o recurso de "Acknowledgements" do Socket.IO, onde o cliente emite um evento para o servidor e espera o reconhecimento desse evento, retornando alguma informação para o front-end. Além disso, aprendemos a salvar os textos dos documentos, utilizando a função encontrarDocumento para encontrar o documento desejado e atualizando o texto desse documento no servidor.

### Aula 03 - Conclusão - Nessa aula, você aprendeu como

Agrupar clientes em salas do Socket.IO:

Utilizamos o método join() (do inglês “juntar”) para isso, passando como parâmetro o nome da sala na qual queremos colocar o cliente. No nosso caso, os nomes das salas eram os nomes dos documentos.
Emitir eventos para uma sala específica:

Para isso, utilizamos o método to() (do inglês “para”), passando como parâmetro o nome da sala para a qual queremos emitir o evento.
Enviar um dado de volta para o cliente com Reconhecimento:

Utilizamos esse recurso quando o cliente emite um evento e espera receber dados de volta do servidor, imitando o modelo de requisição-resposta do HTTP. Para tal, passamos uma função como último parâmetro de emit(), a obtemos na função callback do lado do servidor e a executamos, passando como parâmetro o dado que interessa ao cliente.

## Aula 04 Utilizando o MongoDB

### Aula 04 Criando um banco de dados - Video 1

Nesta aula, aprendemos a criar um cluster no MongoDB Atlas para armazenar os dados do Alura Docs. Configuramos as opções necessárias, como provedor e região, e definimos as etapas de segurança, criando um usuário e senha para acessar o cluster. Criamos um banco de dados chamado "alura-websockets" e uma coleção chamada "documentos". Adicionamos um documento à coleção para verificar a conexão com o banco de dados posteriormente.

### Aula 04 Conectando o banco ao projeto - Video 2

Nesta aula, aprendemos a conectar o banco de dados do MongoDB Atlas com o nosso projeto utilizando o MongoDB Driver do Node.js. Configuramos a conexão com o MongoDB Atlas no arquivo dbConnect.js, utilizando o MongoClient e a string de conexão fornecida pelo banco de dados. Verificamos se a conexão foi bem-sucedida e exportamos a coleção "documentosColecao" para uso em outros arquivos.

### Aula 04 Obtendo dados do banco - Video 3

Nesta aula, aprendemos a modificar o método encontrarDocumento() para selecionar um documento do banco de dados MongoDB Atlas. Utilizamos o método findOne() para buscar um registro na coleção e realizamos adaptações no código para lidar com a promise retornada pelo método. Testamos o sistema para verificar se os documentos eram corretamente captados do banco de dados. Por fim, cadastramos os documentos "Node" e "Socket.io" no banco de dados.

### Aula 04 Alterando dados do banco - Video 4

Nesta aula, reorganizamos os arquivos do projeto, criando um novo arquivo chamado documentosDb.js para armazenar os métodos de operações no banco de dados. Movemos o método encontrarDocumento() para esse novo arquivo e o exportamos para uso em outros arquivos. Em seguida, implementamos a funcionalidade de alterar dados no documento. Criamos o método atualizaDocumento() no arquivo documentosDb.js utilizando o método updateOne() do MongoDB para atualizar o texto do documento no banco de dados. Importamos e utilizamos esse método no arquivo socket-back.js para atualizar o texto do documento quando um usuário digita no campo de texto. Testamos as funcionalidades do Alura Docs, verificando que as alterações são refletidas em tempo real em todas as janelas abertas e que as alterações são salvas no banco de dados.

### Aula 04 - Conclusão - Nessa aula, você aprendeu como

- Criar um banco de dados e conectá-lo com o Alura Docs:

  - Criamos um cluster, um banco de dados e uma coleção no MongoDB Atlas. Em seguida, utilizamos o driver do Node.js para conectar o projeto ao banco de dados. Assim, conseguiremos fazer o projeto interagir com o banco de dados para persistir as informações dos documentos.

- Obter dados do banco de dados:

  - Utilizamos o método findOne (do inglês “encontrar um”) das coleções do MongoDB para buscar por um documento específico. No nosso caso, passamos um objeto com a propriedade nome, e seu valor é o nome do documento a ser encontrado. Com esse método, conseguimos obter o texto salvo no banco de dados para exibir na página de documento.

- Alterar dados do banco de dados:

  - Utilizamos o método updateOne (do inglês “atualizar um”) das coleções do MongoDB para editar um documento específico. O primeiro parâmetro é o de busca do documento, e o segundo parâmetro é um objeto que deve possuir propriedades específicas (por exemplo, $set), que irão indicar ao MongoDB como atualizar o documento. Com esse método, a Eduarda e a Juliana conseguem refletir as alterações dos textos dos documentos no banco de dados.

## Aula 05 Avançando o Alura Docks

### Aula 05 Listando os documentos do banco - Video 1

Nesta aula, aprendemos a sincronizar os dados com o banco de dados antes de implementar a funcionalidade de adição de documentos. Foi mostrado como inserir elementos de forma dinâmica na interface usando JavaScript e como emitir e escutar eventos do Socket.IO para obter os documentos do banco de dados e atualizar a interface do usuário. Também testamos o funcionamento da função de inserção de links para os documentos obtidos do banco de dados.

### Aula 05 Adicionando um documento - Video 2

Nesta aula, aprendemos a implementar a adição de documentos no Alura Docs. Capturamos o valor digitado no campo de texto do formulário, enviamos essa informação para o servidor e adicionamos o nome do documento no banco de dados. Também atualizamos a interface de todos os clientes quando um novo documento é adicionado. Além disso, fizemos com que o campo de texto seja esvaziado automaticamente após a adição do documento.

### Aula 05 Tratando documento existente - Video 3

Nesta aula, aprendemos a tratar o erro de adição de documentos duplicados no Alura Docs. Foi adicionada uma verificação no código para verificar se o documento já existe antes de adicioná-lo. Caso o documento já exista, é emitido um evento informando o usuário. Foi implementada uma função de callback no front-end para exibir uma mensagem de alerta caso o documento já exista.

### Aula 05 Excluindo um documento - Video 4

Na aula, Eduarda e Juliana implementaram a funcionalidade de remoção de documentos no Alura Docs. Eles adicionaram um botão "Excluir documento" na interface e fizeram as alterações necessárias nos arquivos HTML e JavaScript para tornar esse botão funcional. Ao clicar no botão, é emitido um evento para o servidor, que escuta esse evento e executa a função excluirDocumento() para deletar o documento do banco de dados. A operação de exclusão é confirmada no terminal e o documento é removido da interface do Alura Docs.

### Aula 05 Atualizando diferentes páginas - Video 5

Nesta aula, finalizamos a aplicação Alura Docs, refinando alguns pontos. Aprendemos a atualizar a interface após a exclusão de um documento, exibindo um alerta na tela e redirecionando o usuário para a página inicial. Também vimos como tratar o redirecionamento apenas para as pessoas que estão na página do documento excluído. Além disso, atualizamos a página inicial para remover o documento excluído da lista. Realizamos testes para verificar o funcionamento correto das funcionalidades.

### Aula 05 - Conclusão - Nessa aula, você aprendeu como

- Obter todos os documentos do banco de dados:
  - Utilizamos o método find(), que retorna um Cursor do MongoDB. Para transformá-lo em um array que contém todos os documentos, utilizamos o método toArray(). Enviando essa informação de volta ao cliente, a tela inicial poderá mostrar os documentos do banco de dados em vez de uma lista estática.

- Adicionar um documento:
  - Utilizamos o método insertOne() para inserir um novo documento no MongoDB. Precisamos verificar se o documento não existe para então adicioná-lo. Por fim, o resultado da operação de adição possui a propriedade acknowledged, que informa se a operação foi reconhecida pelo banco. Em caso positivo, emitimos um evento de volta para os clientes para adicionar o documento na interface front-end.

- Excluir um documento:
  - Utilizamos o método deleteOne() para excluir um documento do MongoDB. O resultado da operação de exclusão possui a propriedade deletedCount, que informa se a operação foi reconhecida pelo banco. Em caso positivo, emitimos um evento de volta para todos os clientes para realizar as operações necessárias no front-end.

- Atualizar diferentes páginas a partir do mesmo evento:
  - A partir do evento de exclusão emitido pelo servidor, realizamos diferentes operações dependendo de qual página o cliente está. Quem estiver na página do documento excluído será redirecionado para a página inicial, e quem estiver na página inicial verá o documento ser excluído da lista.
