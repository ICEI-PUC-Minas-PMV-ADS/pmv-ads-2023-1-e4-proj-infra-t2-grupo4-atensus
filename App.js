import { NavigationContainer } from '@react-navigation/native';
import {React} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Pages/Login/Login';
import TelaInicial from './Pages/Agendamentos(Cliente)/index';
import Fila from './Pages/Agendamentos(Cliente)/indexFila';
import Agendar from './Pages/Agendamentos(Cliente)/indexAgendar';

import Duvidas from './Pages/Duvidas/indexDuvidas'

import AgendamentoHospital from './Pages/Agendamentos(Hospital)/indexAgendamentos';
import GerenciamentoPaciente from './Pages/Agendamentos(Hospital)/indexGerir';

import Cadastro from './Pages/Cadastro/indexCadastro'
import DadosUsuario from './Pages/DadosUsuario/DadosUsuario';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} headerShown={false} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Fila" component={Fila} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Agendar" component={Agendar} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="AgendamentoHospital" component={AgendamentoHospital} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="GerenciamentoPaciente" component={GerenciamentoPaciente} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Duvidas" component={Duvidas} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="DadosUsuario" component={DadosUsuario} options={{ headerShown: false, gestureEnabled: false }} />


      </Stack.Navigator>
    </NavigationContainer>


  );
}