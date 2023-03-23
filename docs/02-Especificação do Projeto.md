# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

O objetivo geral deste projeto é tornar o atendimento mais eficiente e a diminuição do tempo de espera nos hospitais públicos, envolvendo assim: 

- Agilidade no atendimento nos prontos atendimentos; 

- Diminuição do tempo de espera; 

- Diminuição da lotação nos hospitais; 

-  Melhor organização institucional; 

- Controle da atuação médica nos hospitais. .



## Personas

Definição do diagrama de personas:

![Augusto dos Santos](img/Augusto.jpg)          
|Augusto dos Santos                                | Aplicativos     |
|--------------------------------------------------|-----------------|
|Idade: 27                                         |Linkedin         |
|Ocupação: Estudante de mestrado de Psicologia.    |Instagram        |
|**Motivações:** 	•	Ter disposição física e psicológica para a realização de atividades físicas.
•	Ser referência no tratamento de doenças mentais no Brasil.
|**Frustrações:** Por ser profissional da saúde, Augusto entende as limitações dos hospitais públicos e se frustra com as faltas de iniciativas dos Estados na melhoria dos atendimentos e tratamento da população. 
|**Hobbies, História:**	Augusto estuda durante a semana e faz trilhas de biclicleta nos finais de semana, gosta de passar um tempo com a família e possui muitos amigos onde costuma conversar nos bares de Belo Horizonte durante o final de domingo.|

![image](https://user-images.githubusercontent.com/90812412/226077577-1b3860d4-411b-4cc0-ba81-efbd7667afd9.png)

|Maria Conceição                                   | Aplicativos     |
|--------------------------------------------------|-----------------|
|Idade: 60                                         |WhatsApp         |
|Ocupação: Aposentada, mãe.                        |                 |
|**Motivações:** • Cuidar da Saúde	
• Viajar	
•Família.
|**Frustrações:** •	Perder o dia no hospital
•	Não ser atendida no dia. 
|**Hobbies, História:**	Dona Maria aposetanda por tempo de contribuição, 60 anos de idade, ela se preocupa muito com sua saúde, tem duas filhas, gosta de aproveitar a vida viajando e cuidar de sua família|

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t2-grupo4-atensus/blob/main/docs/img/vanderlei_resized.jpg)

|Vanderlei Souza                                   | Aplicativos     |
|--------------------------------------------------|-----------------|
|Idade: 56                                         |WhatsApp         |
|Ocupação: Pedreiro, mestre de obras.              |Facebook         |
|**Motivações:** • Cuidar da Saúde e ter disposição no trabalho	
• Conseguir atender mais demansdas de obras e formar uma equipe	
•Família.
|**Frustrações:** •	Perder o dia de trabalho, pois estava no hospital
•	Demorar para marcar exames e consultas. 
|**Hobbies, História:**	Seu Vanderlei, mestre de obras, pai de 2 filhas, gosta muito do trabalho que faz mas também gosta de passar momentos com sua família aos finais de semana|

![image](https://user-images.githubusercontent.com/91296105/226124304-a898840a-e76c-4aba-bafd-bd31135c473a.png)

|Rosimere Silva                                    | Aplicativos     |
|--------------------------------------------------|-----------------|
|Idade: 58                                         |WhatsApp         |
|Ocupação: Dona de casa.                           |Facebook         |
|**Motivações:** •	Passar menos tempo em filas.
•	Cuidar da saúde
•	Ter mais tempo com os netos e família.
|**Frustrações:** •	Ficar horas em uma fila esperando por atendimento médico.
•	Perder o dia com a espera do atendimento e não poder aproveitar os netos.
|**Hobbies, História:**	Dona Meire, é dona de casa e tem 4 filhos e 5 netos, é muito dificil reunir toda a família, mas quando reúne é só alegria e brincadeiras e principalmente muitas risadas.|

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Augusto dos Santos  | Conseguir um atendimento médico de forma prática           | Para tratar problemas de saúde de forma eficaz              |
|Maria Conceição     | Conseguir um pronto socorro com atendimento ágil e organizado           | Perder menos tempo dentro do Pronto Socorro |
|Vanderlei Souza     | Ter um atendimento rápido e preciso           | Economizar meu tempo em hospitais e postos de saúde |
|Rosimere Silva      | Ter um atendimento rápido, prático e sem fila de espera           | Resolver todos os problemas de saúde com rapidez e precisão, sem longas filas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Um dos principais pontos da proposta é ter um cadastro geral do usuário e dados como: peso, sintomas principais e após o cadastro os usuários seriam direcionados para uma fila de atendimento. Com isso, seria possível diminuir também a lotação dos espaços, já que o paciente poderia chegar diretamente para a triagem e com as validações necessárias seria assim direcionado ao especialista disponível.  
 

### Descrição Geral da Proposta

 Visando uma melhor organização dos hospitais públicos de pronto atendimento, a ideia do projeto “atenSUS” é de criar um sistema de pré-cadastro dos usuários com seus dados e informações complementares, onde já poderão ser direcionados para a triagem, diminuindo assim o tempo de espera para o atendimento e possivelmente a diminuição da lotação dos hospitais.  



### Processo 1 – DOCUMENTAÇÃO DA ARQUITETURA DISTRIBUIDA  

Funcionalidades 

• Entrada de documentos pelos canais digitais; CPF Nome do paciente. 

• Uso em Aparelho Móvel ou Desktop e Terminal de atendimento na Recepção do hospital. 

• Status do processo de análise reportado ao paciente através de canais digitais por push ou meios de comunicação como SMS e e-mail; 

• Modelo de regra de atendimento mais inteligente reportando pendencias e/ou inconsistência de documentos (Datas de Exames e Horário de Consultas) de forma rápida ao paciente; 

• Uso de documentos digitais disponibilizado por órgãos externos (Carteira de Vacinação e Exames feitos).



 
| COPONENTES | DESCRIÇÃO | 
| --- | --- | 
|  Microservice | Componente responsável pela implementação e exposição de cada um dos contextos de negócio da solução | 
| API | Componente que provê a integração entre as plataformas externas e os microservices. 
|Api Gateway | Camada de autenticação, autorização e log responsável por recepcionar qualquer requisição externa à cloud. 
|Tópicos pub/sub | Filas responsáveis por garantir a integridade dos dados e garantir o processamento mesmo em casos de falha. 
|Provedores  |Componentes responsáveis por recepcionar dados vindos dos contextos de negócio e entregar ao dispositivo do cliente. 
|Mainframe  |Plataforma legada e privada que fornece dados interface para os contextos financiamento e imóveis via integração com Web Service SOAP. 
|Canais Digitais |Componente que provê interface para comunicação com os contextos de negócio. 



 
 


  

 

 
 











Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

| # |Indicador | Objetivos |  Descrição |  Cálculo | Fonte dados |  Perspectiva|  
|---|-----------|----------|-------------|---------|------------|-----------------------|
| 1 |  |  |  |  |  |  |
| 2 | Qualidade do Aplicativo | Avaliar as funcionalidades do aplicativo | Percentual de avaliações realizadas em 5 estrelas | (Atendimento.5estrelas/Atendimento.Total)/100 | Pesquisa de Satisação | Melhoria de atendimento |
| 3 | Eficiência | Avaliar o desempenho do programa nas realizações de taferas | Medir a velocidade de processamento de dados | Horário de finalização - Horário em que a solicitação chega para um enfermeiro | Aplicação | Melhoria no Atendimento |
| 4 | Tempo de Espera da Fila | Avaliar o tempo total de espera para o paciente ser atendido | Calcular o tempo de espera ate que o paciente seja atendido | Tempo de ciclo de espera = horário de entrada do paciente - horário de saida do paciente |  |  |
| 5 |   |   |  |  |   |   |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Os sistemas precisam permitir o cadastro de usuários | ALTA | 
|RF-002| Os sistemas devem oferecer um campo para escolha da especialidade médica desejada. | MÉDIA |
|RF-003| Os sistemas devem permitir ao usuário visualize seu lugar na fila para atendimento da triagem. | Baixa | 
|RF-004| Os sistemas devem oferecer a opções para o usuário sair da fila de atendimento. | MÉDIA |
|RF-005| Os sistemas devem apresentar uma lista de pessoas cadastradas para o atendimento | ALTA |
|RF-006| Os sistemas devem permitir salvar e adicionar informações relevantes do estado de saúde dos usuários | ALTA |
|RF-007| A aplicação deve permitir a geração de relatórios personalizados com base nos dados coletados sobre o paciente, como um resumo do histórico médico ou uma análise de tendências de indicadores de saúde. | BAIXA | 
|RF-007| As aplicações precisam funcionar em qualquer lugar, desde que os aparelhos tenham acesso a internet. | ALTA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku) | MÉDIA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada | ALTA | 
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade  | MÉDIA | 
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) |  BAIXA |
|RNF-005| Os sistemas precisam ser desenvolvidos usando uma API para acessar o banco de dados | ALTA | 
|RNF-006| O aplicativo Mobile precisa ser desenvolvido em React Native e precisa ser responsivo.  |  ALTA |
|RNF-007| Os sistemas devem ser seguros para proteger as informações de saúdes dos usuários | ALTA | 
|RNF-008| As interfaces precisam ser intuitivas, permitindo que todos os usuários entendam seu funcionamento. |  ALTA |
|RNF-009| O aplicativo deve estar em conformidade com as normas e regulamentos locais, regionais e nacionais em relação ao armazenamento, transmissão e privacidade de informações de saúde.  |  ALTA |
|RNF-010| O aplicativo deverá ter um tela de navegação com elementos bem definidos e uma navegabilidade bem fluída.  |  ALTA |
|RNF-011| O HTML do site deve ser escrito com tags que possibilitem a acessibilidade para pessoas com PcD  |  Média |


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
- Link da planilha em Excel https://sgapucminasbr-my.sharepoint.com/:x:/g/personal/1358638_sga_pucminas_br/EY3Nuv5flgBCsVoW1aAMjQEBkm-p_synbrXtilL6IzGucQ?e=XAG5Nz
  <img width="802" alt="Screenshot_1" src="https://user-images.githubusercontent.com/62525275/226222279-c166f8f6-8e87-4ab4-bb47-3bca10abf70f.png">


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 05/06/2023. |
|02| O aplicativo deve se restringir ao desenvolvimento de demandas dos hospitais de pronto atendimento.    |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.  |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

1ª ETAPA: Concepção, Proposta de Solução e Início da Elaboração do Projeto da Solução  (19/03/2023)
•	Documento de Contexto
•	Especificação do Problema
•	Documentação dos perfis de usuários, suas necessidades e Personas.
•	Documentação da Arquitetura Distribuída
•	Documentação dos requisitos funcionais e não funcionais do projeto de acordo com o contexto levantado

2ª ETAPA: Desenvolvimento do Back-end:  Web API (23/04/2023)
•	Documentação da arquitetura da aplicação distribuída
•	Projeto da arquitetura baseada em API
•	Implementação da API e testes de unidade
•	Documentação com justificativa e avaliação do modelo de dados NoSQL para o contexto da aplicação
•	Implementação das funcionalidades que envolvem o banco de dados NoSQL para armazenamento e recuperação de dados

3ª ETAPA: Desenvolvimento do Front-end: Web (14/05/2023)
•	Documentação do projeto de interface e do fluxo de telas do sistema de uma aplicação web
•	Implementação do projeto de interface, fluxo de telas do sistema de uma aplicação web e testes de integração.

4ª ETAPA: Desenvolvimento do Front-end: Mobile (04/06/2023)

•	Documentação do projeto de interface e fluxo de telas do sistema de uma aplicação mobile
•	Implementação do projeto de interface, fluxo de telas do sistema de uma aplicação mobile testes de sistema

5ª ETAPA: Diagnóstico, entrega da solução e apresentação (25/06/2023)

•	Projeto final
•	Considerações finais
•	Entrega do Vídeo da Apresentação Final e PDF usado na Apresentação
•	Realização da Apresentação Final


## Gerenciamento de Equipe

Desenvolvedores 
•	André Soares Alves da Silva
•	Eduardo Lucci Imakawa de Andrade
•	Filipe Marques Martins Pascoal
•	Jonatas Tonin Coelho
•	Lívia Cristina Leite Nunes Silva
•	Paulo Vitor Pereira Rocha, 
•	Tiago Miquéias Viana Rodrigues

Scrum Master 
•	Tiago Miquéias Viana Rodrigues

Product Owner

•	Lívia Cristina Leite Nunes Silva


QA Tester
•	Eduardo Lucci Imakawa de Andrade
•	Paulo Vitor Pereira Rocha

Design 
•	André Soares Alves da Silva 
•	Jonatas Tonin Coelho
•	Filipe Marques Martins Pascoal


## Gestão de Orçamento

Orçamento

Desenvolvedores (Junior)*	R$50.000,00
Hardware	R$21.000,00
Rede	R$2.000,00
Software	R$00,00
TOTAL	R$73.000,00
*Valor pago para trabalhar durante 5 meses.

