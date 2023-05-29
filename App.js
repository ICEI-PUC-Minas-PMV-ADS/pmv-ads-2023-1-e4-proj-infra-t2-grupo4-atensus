import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Pages/Login/indexLogin';
import IndexBoasVindas from './Pages/Agendamentos(Cliente)/indexBoasVindas';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import IndexDuvidas from './Pages/Duvidas/indexDuvidas'


export default function App() {

  const Stack = createNativeStackNavigator();



  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} headerShown={false} /> */}
        <Stack.Screen name="AgendamentoCliente" component={IndexBoasVindas} options={{ headerShown: false, gestureEnabled: false }} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}
