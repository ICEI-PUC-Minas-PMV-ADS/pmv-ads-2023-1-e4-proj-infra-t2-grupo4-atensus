import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";




export default function Login() {

    const navigation = useNavigation();

    return (

        <View style={styles.containerLogin}>
            <StatusBar barStyle='light-content' />

            <Image style={styles.imagemLogoLogin} source={require('../../assets/splash.png')}></Image>
            <Text style={styles.textoLogin}>Login</Text>

            <View style={styles.containerInputs}>

                <Text style={styles.textoInputUsuario}>Usuário</Text>

                <TextInput
                    style={styles.inputUsuario}    
                />

                <Text style={styles.textoInputSenha}>Senha</Text>

                <TextInput
                    style={styles.inputSenha}  
                    secureTextEntry={true}               
                />

                <TouchableOpacity style={styles.buttonEntrarLogin} onPress={() => navigation.navigate('TelaInicial', { screen: 'TelaInicial' })}>
                    <Text style={styles.textoEntrarLogin}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegistrarLogin}onPress={() => navigation.navigate('Cadastro', { screen: 'Cadastro' })}>
                    <Text style={styles.textoRegistrarLogin}>Registre-se</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerLogin: {
        flex: 1,
        backgroundColor: '#2B2B2B',
        alignItems: 'center',
    },
    textoLogin: {
        marginTop: '10%',
        fontSize: 18,
        fontWeight: 700,
        color: 'white'
    },
    textoEntrarLogin: {
        color: 'white',
        fontSize: 16,
        fontWeight: 600
    },
    textoRegistrarLogin: {
        color: '#5C5C5C',
        fontSize: 15,
    },
    textoInputUsuario: {
        bottom: '9%',
        right: '33%',
        fontSize: 15
    },
    textoInputSenha: {
        top: '1%',
        right: '33%',
        fontSize: 15
    },
    imagemLogoLogin: {
        width: 350,
        height: 150,
        top: '7%',
        left: '4%'
    },
    containerInputs: {
        width: 350,
        height: 550,
        top: '3%',
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonEntrarLogin: {
        backgroundColor: '#118FB8',
        width: 200,
        height: 60,
        top: '13%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonRegistrarLogin: {
        width: 100,
        height: 30,
        top: '18%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputUsuario: {
        width: 300,
        height: 70,
        backgroundColor: '#EDEDED',
        borderRadius: 10,
        bottom: '7%',
        textAlign: 'center'
    },
    inputSenha: {
        width: 300,
        height: 70,
        backgroundColor: '#EDEDED',
        borderRadius: 10,
        textAlign: 'center',
        top: '3%',

    }

})