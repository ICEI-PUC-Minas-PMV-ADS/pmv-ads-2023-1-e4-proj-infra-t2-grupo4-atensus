import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

const Cadastro = () => {
  const [formData, setFormData] = useState({
    Nome: '',
    Idade: '',
    Altura: '',
    Peso: '',
    Endereco: '',
    Sintomas: '',
    CPF: '',
    Senha: ''
  });

  const navigation = useNavigation();

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    fetch('https://localhost:7160/api/Pacientes', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        navigation.navigate('Login');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            onChangeText={value => handleInputChange('Nome', value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Idade</Text>
          <TextInput
            style={styles.input}
            placeholder="Idade"
            onChangeText={value => handleInputChange('Idade', value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Altura</Text>
          <TextInput
            style={styles.input}
            placeholder="Altura"
            onChangeText={value => handleInputChange('Altura', value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Peso</Text>
          <TextInput
            style={styles.input}
            placeholder="Peso"
            onChangeText={value => handleInputChange('Peso', value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Endereço Completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Rua, Nº, Bairro, Cidade/Estado"
            onChangeText={value => handleInputChange('Endereco', value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={value => handleInputChange('Senha', value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>CPF</Text>
          <TextInput
            style={styles.input}
            placeholder="CPF"
            onChangeText={value => handleInputChange('CPF', value)}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('Login', { screen: 'Login' })}>
                <Text style={styles.textoVoltar}>Voltar</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
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
    marginTop: height * 0.25,
    paddingHorizontal: 20,
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
  },
});

export default Cadastro;
