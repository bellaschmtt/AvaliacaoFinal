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
          options={{ title: "Bem vindo" }}
        />
        <Stack.Screen
          name="bussola"
          component={Bussola}
          options={{ title: "Bussola" }}
        />
        {/* <Stack.Screen
          name="DeviceInfo"
          // component={DeviceInfo}
          options={{ title: "bussola" }}
        /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
