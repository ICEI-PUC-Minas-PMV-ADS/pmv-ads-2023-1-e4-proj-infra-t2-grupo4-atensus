import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { SelectList } from 'react-native-dropdown-select-list'
import { TextInput } from "react-native-gesture-handler";

import { useRoute } from '@react-navigation/native';

export default function Agendar() {

    const route = useRoute()

    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '1', value: 'Triagem' },
        { key: '2', value: 'Odontologia' },
        { key: '3', value: 'Ortopedia' },
        { key: '4', value: 'Dermatologia' },
        { key: '5', value: 'Oftalmologia' },
    ]

    const navigation = useNavigation();

    return (

        <View style={styles.containerAgendar}>

            <StatusBar backgroundColor='#61c2a1' barStyle='dark-content' />

            <Text style={styles.textoPrincipal}>Agende sua consulta!</Text>
            <Text style={styles.subtituloPrincipal}>Responda a ficha com o que deseja.</Text>
            <Text style={styles.textoEspecialidade}>Escolha a especialidade</Text>

            <SelectList
                dropdownStyles={{ width: 300, alignItems: 'center', backgroundColor: '#2a2a2a', borderWidth: 0 }}
                dropdownTextStyles={{ color: 'white' }}
                inputStyles={{ color: 'white' }}
                setSelected={(val) => setSelected(val)}
                boxStyles={{ backgroundColor: '#2a2a2a', borderWidth: 0, top: '5%', width: 300, borderWidth: 0, justifyContent: 'center' }}
                data={data}
                save="value"
                search={false}
                defaultOption={{ key: '1', value: 'Triagem' }}
            />

            <Text style={styles.textoSintomas}>Descreva seus sintomas</Text>
            <TextInput style={styles.textInputSintomas} value={route.params}></TextInput>
            <Text style={styles.textoObservacao}>Observação</Text>
            <TextInput style={styles.textInputSintomas}></TextInput>

            <TouchableOpacity style={styles.botaoEnviar}>
                <Text style={styles.textoEnviar}>Enviar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoCancelar} onPress={() => navigation.navigate('TelaInicial', { screen: 'TelaInicial' })}>
                <Text style={styles.textoCancelar}>Cancelar</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    containerAgendar: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    textoPrincipal: {
        marginTop: '25%',
        fontSize: 23,
        fontWeight: 700
    },
    subtituloPrincipal: {
        top: '2%',
        fontSize: 15
    },
    textoEspecialidade: {
        marginTop: '12%',
        fontSize: 20,
        fontWeight: 700,
        color: '#118FB8'
    },
    textoSintomas: {
        marginTop: '13%',
        fontSize: 23,
        fontWeight: 700,
        color: '#118FB8'
    },
    textoObservacao: {
        marginTop: '8%',
        fontSize: 23,
        fontWeight: 700,
        color: '#118FB8'
    },
    textInputSintomas: {
        width: 350,
        height: 120,
        backgroundColor: '#EDEDED',
        top: '2%',
        borderRadius: 10,
        textAlign: 'center'
    },
    botaoEnviar: {
        backgroundColor: '#118FB8',
        width: 200,
        height: 50,
        top: '6%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoEnviar: {
        color: 'white',
        fontSize: 16,
        fontWeight: 600
    },
    botaoCancelar: {
        backgroundColor: '#B41C1C',
        width: 150,
        height: 50,
        top: '8%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoCancelar: {
        color: 'white',
        fontSize: 16,
        fontWeight: 600
    },
})