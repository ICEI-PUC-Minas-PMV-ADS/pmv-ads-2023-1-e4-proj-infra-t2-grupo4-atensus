import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { useRoute } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list'
import { TextInput } from "react-native-gesture-handler";

export default function GerenciamentoPaciente() {
    const navigation = useNavigation();
    const route = useRoute();
    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '1', value: 'Triagem' },
        { key: '2', value: 'Odontologia' },
        { key: '3', value: 'Ortopedia' },
        { key: '4', value: 'Dermatologia' },
        { key: '5', value: 'Oftalmologia' },
    ]

    // Acessar o ID do usuário
    const userId = route.params?.userId;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar backgroundColor='#61c2a1' barStyle='dark-content' />
            <Text style={styles.PageTitle}>Gerenciamento de Pacientes</Text>
            <View style={styles.separator} />

            <Text style={styles.titulos}>Paciente</Text>
            <Text style={styles.info}>Jonatas</Text>

            <Text style={styles.titulos}>Especialidade</Text>
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

            <Text style={styles.textoSintomas}>Sintomas</Text>
            <TextInput style={styles.textInputSintomas}></TextInput>
            <Text style={styles.textoObservacao}>Descrição</Text>
            <TextInput style={styles.textInputSintomas}></TextInput>

            <Text style={styles.textoBemVindo}>{userId}</Text>

            <View style={styles.botaoContainer}>
                <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('AgendamentoHospital', { screen: 'TelaInicial' })}>
                    <Text style={styles.textoVoltar}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoEditar}>
                    <Text style={styles.textoEditar}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoExcluir}>
                    <Text style={styles.textoExcluir}>Excluir</Text>
                </TouchableOpacity>
            </View>
            
            
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    PageTitle: {
        marginTop: '20%',
        fontSize: 20,
        fontWeight: 700
    },

    titulos: {
        marginTop: '10%',
        fontSize: 24,
        fontWeight: 700,
        color: '#118FB8'
    },
    info: {
        marginTop: '5%',
        fontSize: 18,
        fontWeight: 600,
        color: 'black'
    },
    textoVoltar: {
        color: 'white',
        fontSize: 16,
        fontWeight: 600
    },

    textoEditar: {
        color: 'white',
        fontSize: 16,
        fontWeight: 600
    },

    textoExcluir: {
        color: 'white',
        fontSize: 16,
        fontWeight: 600
    },

    textoSintomas:{
        marginTop: '10%',
        fontSize: 23,
        fontWeight: 700,
        color: '#118FB8'
    },
    textoObservacao:{
        marginTop: '5%',
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
    separator: {
        borderBottomWidth: 2,
        borderColor: 'black',
        marginBottom: 10, // Ajuste a margem conforme necessário
      },
    imagemLogo: {
        width: 300,
        height: 100,
        top: '23%',
        left: '4%'
    },

    botaoVoltar: {
        backgroundColor: '#118FB8',
        width: '25%',
        height: 40,
        top: '8%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        marginHorizontal: 10, // Margem lateral

    },

    botaoEditar: {
        backgroundColor: 'black',
        width: '25%',
        height: 40,
        top: '8%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        marginHorizontal: 10, // Margem lateral

    },

    botaoExcluir: {
        backgroundColor: 'red',
        width: '25%',
        height: 40,
        top: '8%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        marginHorizontal: 10, // Margem lateral

    },

    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingBottom: 20 // Ajuste o valor da margem
    },
    botaoContainer: {
        flexDirection: 'row',
        marginTop: 20,
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