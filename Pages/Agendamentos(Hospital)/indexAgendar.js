import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { SelectList } from 'react-native-dropdown-select-list'
import { TextInput } from "react-native-gesture-handler";

export default function Agendar() {

    const navigation = useNavigation();

    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '1', name: 'Jonatas', value: 'Triagem', position: 1 },
        { key: '2', name: 'Luiza', value: 'Consulta', position: 2 },
        { key: '3', name: 'Paulo', value: 'Acompanhamento', position: 3 },
        { key: '4', name: 'Vanessa', value: 'Triagem', position: 4 },
        { key: '5', name: 'Vitória', value: 'Consulta', position: 5 },
    ]

    return (
        <View style={styles.containerAgendar}>

            <StatusBar backgroundColor='#61c2a1' barStyle='dark-content' />

            <Text style={styles.textoPrincipal}>Gerenciamento de Pacientes</Text>
            {data.map(item => (
                <TouchableOpacity key={item.key} style={styles.botaoAgendamento} onPress={() => navigation.navigate('Agendar', { screen: 'Agendar' })}>
                    <Text style={styles.textoAgendar}>{item.name} ● {item.value}  ● Posição {item.position}</Text>
                </TouchableOpacity>
            ))}

        </View>
    )
}

const styles = StyleSheet.create({
    containerAgendar: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    botaoAgendamento: {
        backgroundColor: '#118FB8',
        width: '90%',
        height: 60,
        top: '5%',
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



})