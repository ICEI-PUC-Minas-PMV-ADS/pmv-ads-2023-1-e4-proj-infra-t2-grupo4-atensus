import React, {useState} from 'react';
import './Duvidas.css';

const dataCollections = [
  {
    questao: "O que é o AtenSUS? ",
    resposta: "O AtenSUS é um aplicativo desenvolvido pelo grupo 4 do 4º semestre de Análise e Desenvolvimento de Sistemas da Universidade PUC MINAS, visando facilitar o agendamento de consultas de emergência em unidades de saúde do Sistema Único de Saúde (SUS).",
  },
  { 
    questao: "Como funciona o agendamento pelo AtenSUS? ", 
    resposta: "Para utilizar o aplicativo AtenSUS, o usuário deve primeiramente criar uma conta através do site ou aplicativo. Com a conta criada, o usuário poderá acessar a opção de agendamento de consultas de emergência. O aplicativo permite que o usuário escolha a unidade de saúde mais próxima e disponível para o atendimento de emergência, oferecendo uma seleção de unidades que atendem a sua localização e necessidade.", 
    },
    {
    questao: "É possível agendar via telefone?",
    resposta: "Para usar o aplicativo no telefone, o usuário deve primeiro baixá-lo gratuitamente na loja de aplicativos do seu dispositivo móvel. Depois de instalado, é necessário criar uma conta informando dados pessoais, como nome completo, CPF,data de nascimento e endereço.",
    },
    {
    questao: "O aplicativo já direciona para a especialidade desejada?",
    resposta:"Na verdade, o AtenSUS não realiza a triagem médica, mas sim o agendamento da consulta de emergência. Após o usuário marcar a consulta pelo aplicativo, ele ainda precisará comparecer à unidade de saúde para passar pela triagem, onde será avaliado pela equipe médica e, caso necessário, encaminhado para a especialidade médica adequada"
    },
    {
    questao: "O serviço do AtenSUS é gratuito?",
    resposta:"Sim, o uso do serviço é gratuito e não possui nenhum tipo de cobrança. O usuário só precisa ter um dispositivo móvel ou computador com acesso à internet para baixar o aplicativo ou acessar o site e criar uma conta."
    },
    {
    questao: "O AtenSUS é um aplicativo oficial do SUS?",
    resposta:"Não, o AtenSUS é um aplicativo desenvolvido por alunos da PUC Minas, não possuindo nenhuma ligação com o SUS. O aplicativo foi desenvolvido com o objetivo de facilitar o agendamento de consultas de emergência, mas não é um aplicativo oficial do SUS."
    },
    {
    questao: "Qual é o objetivo do atenSUS?",
    resposta:"O objetivo do AtenSUS é facilitar o agendamento de consultas de emergência em unidades de saúde do SUS, permitindo que o usuário possa agendar a consulta pelo aplicativo e não precise se deslocar até a unidade de saúde para realizar o agendamento."
    },
];

function Accordion() {
  const [accordion, setAccordion] = useState(-1);

  function toggleAccordion(index) {
    setAccordion(accordion === index ? -1 : index);
  }

  return (
    <>
      <div className="container_duvidas">
        <div>
          <h1 className='text_question'>Perguntas Frequentes</h1>
          <h1 className='text_resposta'>Vamos responder algumas de suas perguntas</h1>
        </div>
        <div className="accordion__faq">
          {dataCollections.map((item, index) => (
            <div key={index} onClick={() => toggleAccordion(index)}>
              <div className="accordion__faq-heading">
                <h3 className={accordion === index ? "active" : ""}>{item.questao}</h3>
              </div>
              <div>
                {accordion === index ? (
                  <span className="verticle" onClick={() => toggleAccordion(index)}>
                    -
                  </span>
                ) : (
                  <span className="verticle" onClick={() => toggleAccordion(index)}>
                    +
                  </span>
                )}

              </div>
              <div>
                <p className={accordion === index ? "active" : "inactive"}>{item.resposta}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="Bolinha_d" />
        <div className="Bolinha_d1" />
        <div className="Bolinha_d2" />
        <div className="Bolinha_d3" />
        <div className="Bolinha_d4" />

      </div>

     
</>

    
  );
}

export default Accordion;