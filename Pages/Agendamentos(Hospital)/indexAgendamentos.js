import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";


export default function AgendamentoHospital() {

    const navigation = useNavigation();

    const data = [
        { key: 1, name: 'Jonatas', value: 'Triagem', position: 1 },
        { key: 2, name: 'Luiza', value: 'Consulta', position: 2 },
        { key: 3, name: 'Paulo', value: 'Acompanhamento', position: 3 },
        { key: 4, name: 'Vanessa', value: 'Triagem', position: 4 },
        { key: 5, name: 'Vitória', value: 'Consulta', position: 5 },
    ]

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <StatusBar backgroundColor='#61c2a1' barStyle='dark-content' />

            <Text style={styles.textoPrincipal}>Gerenciamento de Pacientes</Text>

            <Text style={styles.subtituloPrincipal}>Acompanhe aqui os pacientes</Text>

            {data.map(item => (
                <TouchableOpacity key={item.key} style={styles.botaoAgendamento} onPress={() => {
                    obterInformacoesUsuario(item.key);
                    navigation.navigate('GerenciamentoPaciente', {
                        screen: 'Agendar',
                        userId: item.key
                    })
                }}
                >
                    <Text style={styles.textoAgendar}>{item.name} ● {item.value}  ● Posição {item.position}</Text>
                </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('TelaInicial', { screen: 'TelaInicial' })}>
                <Text style={styles.textoVoltar}>Voltar</Text>
            </TouchableOpacity>

            <Image style={styles.imagemLogo} source={require('../../assets/logo.png')}></Image>

            <View style={styles.bolinha}></View>
            <View style={styles.bolinha1}></View>
            <View style={styles.bolinha2}></View>
            <View style={styles.bolinha3}></View>
            <View style={styles.bolinha4}></View>
            <View style={styles.bolinha5}></View>
            <View style={styles.bolinha6}></View>

        </ScrollView>
    )
}


const obterInformacoesUsuario = (id) => {
    //ESSA FUNÇÃO ESÁ RECEBENDO O ID DO USUÁRIO CLICADO NA LISTAGEM
    //A IDEIA AQUI É: QUANDO CLICAR NO BOTÃO, FAREMOS UMA REQUISIÇÃO PARA UMA ROTA QUE RETORNARÁ TODOS OS DADOS DO USUÁRIO
    //ESSES DADOS ACESSAREMOS NA TELA indexGerir, PARA APRESENTA-LOS
    return id;
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    botaoAgendamento: {
        backgroundColor: '#118FB8',
        width: '90%',
        height: 60,
        top: '5%',
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoPrincipal: {
        marginTop: '25%',
        fontSize: 23,
        fontWeight: 700
    },
    textoAgendar: {
        color: 'white',
        fontSize: 16,
        fontWeight: 600
    },

    subtituloPrincipal: {
        top: '2%',
        fontSize: 15
    },

    imagemLogo: {
        width: 300,
        height: 100,
        top: '23%',
        left: '4%'
    },
    botaoVoltar:{
        backgroundColor: '#118FB8',
        width: 150,
        height: 50,
        top: '8%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    textoVoltar:{
        color: 'white',
        fontSize: 16,
        fontWeight: 600
    },
    bolinha: {
        width: 120,
        height: 120,
        backgroundColor: '#73c2ab',
        borderRadius: '100%',
        left: '55%'
    },
    bolinha1: {
        width: 120,
        height: 120,
        backgroundColor: '#c7bcba',
        borderRadius: '100%',
        right: '55%'
    },
    bolinha2: {
        width: 120,
        height: 120,
        backgroundColor: '#4d5e74',
        borderRadius: '100%',
        right: '0%',
        top: '5%'
    },
    bolinha3: {
        width: 120,
        height: 120,
        backgroundColor: '#73c2ab',
        borderRadius: '100%',
        left: '55%'
    },
    bolinha4: {
        position: 'absolute',
        width: 120,
        height: 120,
        backgroundColor: '#c7bcba',
        borderRadius: '100%',
        left: '25%',
        top: '-5%'
    },
    bolinha5: {
        position: 'absolute',
        width: 120,
        height: 120,
        backgroundColor: '#4d5e74',
        borderRadius: '100%',
        left: '95%',
        top: '10%'
    },
    bolinha6: {
        position: 'absolute',
        width: 120,
        height: 120,
        backgroundColor: '#73c2ab',
        borderRadius: '100%',
        right: '90%',
        top: '30%'
    }

})