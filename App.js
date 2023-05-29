import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Pages/Login/indexLogin';
import IndexAgendamentoCliente from './Pages/Agendamentos(Cliente)';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="AgendamentoCliente" component={IndexAgendamentoCliente} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
