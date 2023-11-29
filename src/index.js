import { NavigationContainer } from "@react-navigation/native";//OK
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Bussola from "./screens/Bussola";


const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: "Atividade Final do Tecnico de INFO" }}
        />
        <Stack.Screen
          name="bussola"
          component={Bussola}
          options={{ title: "Bussola" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
