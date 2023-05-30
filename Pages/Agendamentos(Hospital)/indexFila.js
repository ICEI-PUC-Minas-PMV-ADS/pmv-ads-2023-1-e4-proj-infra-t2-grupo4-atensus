import { React } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";


export default function Fila() {

    const navigation = useNavigation();

    return (
        <View style={styles.containerFila}>
            <StatusBar backgroundColor='#61c2a1' barStyle='dark-content' />
            <Text style={styles.textoPosicao}>Sua posição na fila é:</Text>
            <View style={styles.circulo}>
                <Text style={styles.posicaoFila}>13</Text>
            </View>
            <Text style={styles.textoAviso}>Logo mais chegara sua hora!</Text>
            <Text style={styles.textoConsulta}>Triagem com Dr.Lemos</Text>
            <TouchableOpacity style={styles.botaoSair} onPress={() => navigation.navigate('TelaInicial', { screen: 'TelaInicial' })}>
                <Text style={styles.textoSair}>Sair da fila</Text>
            </TouchableOpacity>
            <Text style={styles.textoAvisoSaida}>Ao fazer isso você dará sua vaga para outra pessoa.</Text>
            <Image style={styles.imagemLogo} source={require('../../assets/logo.png')}></Image>


        </View>
    )
}

const styles = StyleSheet.create({
    containerFila: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    textoPosicao: {
        marginTop: '25%',
        fontSize: 20,
        fontWeight: 700
    },
    posicaoFila:{
        fontSize: 70,
        fontWeight: 700,
        color: 'white',    
        textAlign: 'center'
    },
    textoAviso: {
        marginTop: '20%',
        fontSize: 15,
    },
    textoConsulta:{
        marginTop: '10%',
        fontSize: 20,
        fontWeight: 700
    },
    textoAvisoSaida:{
        width: 200,
        marginTop: '15%',
        fontSize: 15,
        textAlign: 'center',
        color: '#B41C1C'
    },
    imagemLogo: {
        width: 300,
        height: 100,
        top: '2%',
        left: '4%'
    },
    circulo: {
        width: 270,
        height: 270,
        backgroundColor: '#2A2A2A',
        borderRadius: '270',
        top: '5%',
        justifyContent: 'center'
    },
    botaoSair:{
        backgroundColor: '#B41C1C',
        width: 200,
        height: 60,
        top: '4%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoSair:{
        color: 'white',
        fontWeight: 600,
        fontSize: 15
    }
})