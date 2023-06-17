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
    const [Descricao, setDescricao] = React.useState("");

    const data = [
        { key: '1', value: 'Triagem' },
        { key: '2', value: 'Odontologia' },
        { key: '3', value: 'Ortopedia' },
        { key: '4', value: 'Dermatologia' },
        { key: '5', value: 'Oftalmologia' },
    ]
    route.params.descricao = Descricao
    const navigation = useNavigation();
    const handleUpdate = () => {


         
            fetch('https://localhost:7160/api/Pacientes/atualizar', {
              method: 'PUT',
              body: JSON.stringify(route.params),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(response => response.json())
              .then(data => {
                console.log(data);
               
                alert('Descrição enviado com sucesso!')
                //navigation.navigate('FILA');
              })
              .catch(error => {
             
                alert('Erro ao alterar o paciente.')
                console.error(error);


              });
        
       
    };

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

            <View style={styles.textoPrincipal}>
                <Text style={styles.label}>Descreva seus sintomas</Text>
                <TextInput
                    style={styles.textInputSintomas}
                    placeholder="Descreva seus sintomas"
                    onChangeText={setDescricao}
                />
            </View>


            <TouchableOpacity style={styles.botaoEnviar} onPress={(handleUpdate)}>
                <Text style={styles.textoEnviar}>Enviar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoFila} onPress={() => navigation.navigate('Fila', { screen: 'Fila' })}>
                <Text style={styles.textoFila}>Ir para fila</Text>
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
    inputContainer: {
        marginBottom: 10,
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

    botaoFila: {
        backgroundColor: '#118FB8',
        width: 200,
        height: 50,
        top: '6%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoFila: {
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