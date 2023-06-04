import axios from 'axios';

import React, { useState  } from 'react';
import {  View, TextInput, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useRoute  } from '@react-navigation/native';

import Logo from '../../assets/logo.png';

import LogoAtensus from '../../assets/logo.png';
//import MedicaCadastro from '../assets/medicaCadastro.png';

export default function DadosUsuario({  }) {


     const route = useRoute()

    const t = route
    var valor ;

  //  console.log(t.params  )

    {Object.entries(t.params ).map(([key, value]) => {
         
            valor =value
    })}

   // console.log(  valor[0] )

    var objeto = JSON.parse(valor);

console.log(objeto.nome );
console.log(objeto.idade );
console.log(objeto.altura );
console.log(objeto.peso );
console.log(objeto.endereco );
console.log(objeto.cpf );
console.log(objeto.senha );
console.log(objeto.sintomas );
      
    const [formData, setFormData] = useState({
        Nome: objeto.nome,
        Idade: objeto.idade,
        Altura: objeto.altura,
        Peso: objeto.peso,
        Endereco: objeto.endereco,
        CPF: objeto.cpf,
        Senha:objeto.senha,
        Sintomas:objeto.sintomas
    });

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    try {
        const handleSubmit = () => {
            axios
                .fetch(`https://localhost:7160/api/Pacientes/login/101010/987654321`)
                .then(response => {
                    const data = response.data;
                    setFormData({
                        ...formData,
                        Nome: data.nome,
                        Idade: data.idade,
                        Altura: data.altura,
                        Peso: data.peso,
                        Endereco: data.endereco,
                        CPF: data.cpf
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        };
        //const { docs } = response.data;

        //console.log(docs);

    } catch (err) {
        // TODO
        // adicionar tratamento da exceção
        console.error(err);
    }

    const handleSubmit = () => {
        axios.get(`https://localhost:7160/api/Pacientes/login/101010/987654321`)
            .then(response => {
                console.log(response)
                // setFormData({
                //   ...formData,
                //   Nome: data.nome,
                //   Idade: data.idade,
                //   Altura: data.altura,
                //   Peso: data.peso,
                //   Endereco: data.endereco,
                //   CPF: data.cpf
                // });
            })
            .catch(error => {
                console.error(error);

            })

    }


    // const handleUpdate = () => {
    //   axios
    //     .put('https://localhost:7160/api/Pacientes/update', formData)
    //     .then(response => {
    //       console.log('Dados atualizados:', response.data);
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // };


    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Image source={LogoAtensus} style={styles.logo} />
            </View>
            <Image source={MedicaCadastro} style={styles.image} /> */}

            <View style={styles.form}>
                <Text style={styles.label}>Nome Completo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome Completo"
                    value={formData.Nome}
                    onChangeText={value => handleInputChange('Nome', value)}
                />

                <Text style={styles.label}>Idade</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Idade"
                    value={formData.Idade}
                    onChangeText={value => handleInputChange('Idade', value)}
                />

                <Text style={styles.label}>Altura</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Altura"
                    value={formData.Altura}
                    onChangeText={value => handleInputChange('Altura', value)}
                />

                <Text style={styles.label}>Peso</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Peso"
                    value={formData.Peso}
                    onChangeText={value => handleInputChange('Peso', value)}
                />

                <Text style={styles.label}>Endereço Completo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Rua, Nº, Bairro, Cidade/Estado"
                    value={formData.Endereco}
                    onChangeText={value => handleInputChange('Endereco', value)}
                />

                <Text style={styles.label}>CPF</Text>
                <TextInput
                    style={styles.input}
                    placeholder="CPF"
                    value={formData.CPF}
                    onChangeText={value => handleInputChange('CPF', value)}
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={formData.Senha}
                    onChangeText={value => handleInputChange('Senha', value)}
                />
            </View>

            {/* <TouchableOpacity style={styles.button} onPress={handleUpdate}>
      <Text style={styles.buttonText}>Buscar Dados</Text>
      </TouchableOpacity>
       */}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Buscar Dados</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>


            <Image style={styles.imagemLogo} source={require('../../assets/logo.png')}></Image>

            <View style={styles.bolinha}></View>
            <View style={styles.bolinha1}></View>
            <View style={styles.bolinha2}></View>
            <View style={styles.bolinha3}></View>
            <View style={styles.bolinha4}></View>
            <View style={styles.bolinha5}></View>
            <View style={styles.bolinha6}></View>

        </View>


    );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form: {
      alignItems: 'center',
      //marginTop: height * 0.05,
      paddingHorizontal: 20,
    },
    imagemLogo: {
        width: 300,
        height: 100,
        top: '0%',
        left: '4%'
    },
    inputContainer: {
      marginBottom: 10,
    },
    label: {
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 19,
      marginBottom: 13,
    },
    input: {
      width: 250,
      padding: 10,
      marginBottom: 10,
      borderRadius: 4,
      backgroundColor: '#f2f2f2',
      fontSize: 16,
      color: '#666',
    },
    button: {
      marginTop: 0,
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 220,
      height: 38,
      backgroundColor: '#73c2ab',
      borderRadius: 12,
    },
    buttonText: {
      fontSize: 18,
      lineHeight: 22,
      color: '#fff',
    },
    botaoVoltar:{
          backgroundColor: '#B41C1C',
          width: 150,
          height: 50,
          top: '-1%',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center'
      },
    textoVoltar:{
        color: 'white',
        fontSize: 16,
        fontWeight: 600
    },    bolinha: {
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

});







