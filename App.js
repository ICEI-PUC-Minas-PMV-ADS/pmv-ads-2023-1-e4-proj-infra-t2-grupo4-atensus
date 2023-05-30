import { NavigationContainer } from '@react-navigation/native';
import {React, useRef} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Pages/Login/Login';
import TelaInicial from './Pages/Agendamentos(Cliente)/index';
import Fila from './Pages/Agendamentos(Cliente)/indexFila';
import Agendar from './Pages/Agendamentos(Cliente)/indexAgendar';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} headerShown={false} /> */}
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Fila" component={Fila} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="Agendar" component={Agendar} options={{ headerShown: false, gestureEnabled: false }} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}
