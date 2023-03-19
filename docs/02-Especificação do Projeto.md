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
|Maria Conceição     | conseguir um pronto socorro com atendimento ágil e organizado           | Perder menos tempo dentro do Pronto Socorro |
|Vanderlei Souza     | Ter um atendimento rápido e preciso           | Economizar meu tempo em hospitais e postos de saúde |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Um dos principais pontos da proposta é ter um cadastro geral do usuário e dados como: peso, sintomas principais e após o cadastro os usuários seriam direcionados para uma fila de atendimento. Com isso, seria possível diminuir também a lotação dos espaços, já que o paciente poderia chegar diretamente para a triagem e com as validações necessárias seria assim direcionado ao especialista disponível.  
 

### Descrição Geral da Proposta

 Visando uma melhor organização dos hospitais públicos de pronto atendimento, a ideia do projeto “atenSUS” é de criar um sistema de pré-cadastro dos usuários com seus dados e informações complementares, onde já poderão ser direcionados para a triagem, diminuindo assim o tempo de espera para o atendimento e possivelmente a diminuição da lotação dos hospitais.  



### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

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


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

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

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
