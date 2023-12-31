import Mapa from "./screens/Mapa";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        activeColor="#DDA0DD"
        inactiveColor="#FFE4E1"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: "red" }}
        barStyle={{ backgroundColor: "#FF69B4" }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Stack.Screen
          name="Mapa"
          component={Mapa}
          options={{
            tabBarLabel: "Mapa",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="map" color={color} size={26} />
            ),
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}