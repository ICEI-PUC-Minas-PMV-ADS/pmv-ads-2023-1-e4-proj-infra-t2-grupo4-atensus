import { React } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import Agendar from "./indexAgendar";
import Fila from "./indexFila";


export default function TelaInicial() {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor='#61c2a1' barStyle='dark-content' />

            <Text style={styles.textoBemVindo}>Seja bem-vindo @user</Text>
            <Text style={styles.escolherServico}>Escolha um serviço</Text>
            <TouchableOpacity style={styles.botaoAgendar} onPress={() => navigation.navigate('Agendar', { screen: 'Agendar' })}>
                <Text style={styles.textoAgendar}>Agendar</Text>
            </TouchableOpacity>
            <Text style={styles.explicarAgendar}>É permitido apenas um atendimento por pessoa.</Text>
            <TouchableOpacity style={styles.botaoPosicao} onPress={() => navigation.navigate('Fila', { screen: 'Fila' })}>
                <Text style={styles.textoFila}>Posição na fila</Text>
            </TouchableOpacity>
            <Text style={styles.explicarFila}>Consulte sua posição no agendamento ativo.</Text>
            <Image style={styles.imagemLogo} source={require('../../assets/logo.png')}></Image>

            <View style={styles.bolinha}></View>
            <View style={styles.bolinha1}></View>
            <View style={styles.bolinha2}></View>
            <View style={styles.bolinha3}></View>
            <View style={styles.bolinha4}></View>
            <View style={styles.bolinha5}></View>
            <View style={styles.bolinha6}></View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    textoBemVindo: {
        marginTop: '40%',
        fontSize: 20,
        fontWeight: 700
    },
    escolherServico: {
        marginTop: '18%',
        fontSize: 15,
        fontWeight: 700
    },
    botaoAgendar: {
        backgroundColor: '#118FB8',
        width: 200,
        height: 60,
        top: '5%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoAgendar: {
        color: 'white',
        fontSize: 16,
        fontWeight: 600
    },
    explicarAgendar: {
        width: 170,
        top: '9%',
        textAlign: 'center'
    },
    botaoPosicao: {
        backgroundColor: '#118FB8',
        width: 200,
        height: 60,
        top: '14%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoFila: {
        color: 'white',
        fontSize: 16,
        fontWeight: 600
    },
    explicarFila: {
        width: 170,
        top: '18%',
        textAlign: 'center'
    },
    imagemLogo: {
        width: 300,
        height: 100,
        top: '23%',
        left: '4%'
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