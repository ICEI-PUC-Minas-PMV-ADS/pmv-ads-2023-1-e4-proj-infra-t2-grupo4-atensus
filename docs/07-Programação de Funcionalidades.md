# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

A API do projeto ATENSUS foi desenvolvida com ASPNET.Core e MONGO DB, respeitando os requisito de ser projetado com um banco de dados não relacional. 

Para tal, foi desenvolvido um banco para receber os dados dos Pacientes (usuários), que poderão cadastrar seus dados para entrar em uma fila da triagem.

![Imagem do WhatsApp de 2023-04-23 à(s) 21 00 48](https://user-images.githubusercontent.com/90812412/233874664-c164de4e-0f46-42a8-aaca-aa1690b86271.jpg)
![Imagem do WhatsApp de 2023-04-23 à(s) 21 01 34](https://user-images.githubusercontent.com/90812412/233875097-6f249c4c-f383-4408-addc-542b99fb2ec0.jpg)


Obedecendo assim o requisito: RF-001 - Os sistemas precisam permitir o cadastro de usuários	e RF-005 - Os sistemas devem apresentar uma lista de pessoas cadastradas para o atendimento	.


Além disso o banco compatibiliza com o requisito: RF-006- Os sistemas devem permitir salvar e adicionar informações relevantes do estado de saúde dos usuários	, uma vez que é posssível para o usuário cadastar seu estado de saúde e passará por uma validação do hospital onde registrará dados adicionais de saúde do mesmo, registrando assim, os dados no banco não relacional "hospital".

Imagem de referência do Banco de dados Paciente: 

![DB MONO-PACIENTES](img/DB_mongo.PNG)   

Sendo assim, o projeto também contempla a RNF-005- Os sistemas precisam ser desenvolvidos usando uma API para acessar o banco de dados	 

## Justificativa e avaliação do modelo de dados NoSQL para o contexto da aplicação

<span>No contexto da aplicação AtenSus, o modelo de dados NoSQL é escolha interessante e adequada para armazenar e gerenciar as informações de marcação de consultas e sintomas dos pacientes.

O modelo NoSQL oferece flexibilidade na forma de armazenar e acessar os dados, o que é muito vantajoso em um cenário de constante evolução e mudanças nos dados, como no caso de registros de saúde dos pacientes. Além disso, muitos bancos de dados NoSQL são escaláveis horizontalmente e possuem recursos de alta disponibilidade e tolerância a falhas, o que é crucial em um contexto de saúde pública em que é essencial garantir que os pacientes tenham acesso rápido e eficiente aos serviços médicos.

O exemplo de banco de dados NoSQL escolhido para a aplicação AtenSus é o MongoDB. Este banco de dados é conhecido por sua flexibilidade e escalabilidade, além de oferecer recursos de indexação e busca de texto completo, o que pode ser útil para a busca de informações em grandes volumes de dados.

A escolha do modelo de dados NoSQL para a aplicação AtenSus foi avaliada cuidadosamente, levando em consideração fatores como a complexidade e natureza dos dados a serem armazenados, as necessidades de integração com outros sistemas, as habilidades e conhecimentos da equipe de desenvolvimento, entre outros aspectos.

Portanto, é fundamental destacar que fora feita uma avaliação cuidadosa das necessidades e recursos disponíveis antes de optar pelo modelo NoSQL para a aplicação AtenSus.</span>

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
