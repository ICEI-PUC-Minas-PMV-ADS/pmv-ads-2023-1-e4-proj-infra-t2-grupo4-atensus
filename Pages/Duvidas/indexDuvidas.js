import { React } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Duvidas() {

  const navigation = useNavigation();

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
    resposta: "Para usar o aplicativo no telefone, o usuário deve primeiro baixá-lo gratuitamente na loja de aplicativos do seu dispositivo móvel. Depois de instalado, é necessário criar uma conta informando dados pessoais, como nome completo, CPF, data de nascimento e endereço.",
  },
  {
    questao: "O aplicativo já direciona para a especialidade desejada?",
    resposta: "Na verdade, o AtenSUS não realiza a triagem médica, mas sim o agendamento da consulta de emergência. Após o usuário marcar a consulta pelo aplicativo, ele ainda precisará comparecer à unidade de saúde para passar pela triagem, onde será avaliado pela equipe médica e, caso necessário, encaminhado para a especialidade médica adequada",
  },
  {
    questao: "O serviço do AtenSUS é gratuito?",
    resposta: "Sim, o uso do serviço é gratuito e não possui nenhum tipo de cobrança. O usuário só precisa ter um dispositivo móvel ou computador com acesso à internet para baixar o aplicativo ou acessar o site e criar uma conta.",
  },
  {
    questao: "O AtenSUS é um aplicativo oficial do SUS?",
    resposta: "Não, o AtenSUS é um aplicativo desenvolvido por alunos da PUC Minas, não possuindo nenhuma ligação com o SUS. O aplicativo foi desenvolvido com o objetivo de facilitar o agendamento de consultas de emergência, mas não é um aplicativo oficial do SUS.",
  },
  {
    questao: "Qual é o objetivo do AtenSUS?",
    resposta: "O objetivo do AtenSUS é facilitar o agendamento de consultas de emergência em unidades de saúde do SUS, permitindo que o usuário possa agendar a consulta pelo aplicativo e não precise se deslocar até a unidade de saúde para realizar o agendamento.",
  },
];

  function Accordion() {
    const [accordion, setAccordion] = useState(-1);

    function toggleAccordion(index) {
      setAccordion(accordion === index ? -1 : index);
    }

    return (
      <View style={styles.container}>
        <View style={styles.container_duvidas}>
          <Text style={styles.text_question}>Perguntas Frequentes</Text>
          <Text style={styles.text_resposta}>Vamos responder algumas de suas perguntas</Text>
          <ScrollView style={styles.scrollView}>
            <View style={styles.accordion__faq}>
              {dataCollections.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => toggleAccordion(index)}
                  style={styles.accordion__faqItem}
                >
                  <View style={styles.accordion__faqHeading}>
                    <Text style={[styles.questao, accordion === index && styles.active]}>{item.questao}</Text>
                  </View>
                  <View style={styles.respostaContainer}>
                    {accordion === index ? (
                      <Text style={styles.verticle} onPress={() => toggleAccordion(index)}>
                        -
                      </Text>
                    ) : (
                      <Text style={styles.verticle} onPress={() => toggleAccordion(index)}>
                        +
                      </Text>
                    )}
                    <Text style={[styles.text_resposta, accordion === index ? styles.active : styles.inactive]}>
                      {item.resposta}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_duvidas: {
    flex: 1,
    width: '100%',
    maxWidth: 1100,
    marginHorizontal: 'auto',
    padding: 20,
  },
  text_question: {
    textAlign: 'left',
    fontSize: 20,
    color: '#73c2ab',
    marginBottom: 10,
    marginTop: 40,
  },
  text_resposta: {
    textAlign: 'left',
    fontSize: 15,
    color: '#647780',
    marginBottom: 30,
  },
  scrollView: {
    flex: 1,
  },
  accordion__faq: {
    marginBottom: 20,
  },
  accordion__faqItem: {
    backgroundColor: '#3c3c3c',
    color: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#3d3c3c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  accordion__faqHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3c3c3c',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  questao: {
    flex: 1,
    fontSize: 16, 
    color: '#ffffff', 
    textAlign: 'left',
    margin: 0,
    backgroundColor: '#3c3c3c',
  },
  verticle: {
    fontSize: 15,
    color: '#ffffff',
    cursor: 'pointer',
    backgroundColor: '#3c3c3c',
  },
  active: {
    color: '#ffffff',
    backgroundColor: '#3c3c3c',
  },
  inactive: {
    display: 'none',
  },
  respostaContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  resposta: {
    flex: 1,
    fontSize: 14, 
    color: '#ffffff', 
  }
})


