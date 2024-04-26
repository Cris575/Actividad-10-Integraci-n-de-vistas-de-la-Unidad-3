import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen"; // Importa tu pantalla de inicio
import CameraScreen from "./src/screens/CameraScreen"; // Importa tu pantalla de cámaracámara
import ComunicacionesScreen from "./src/screens/Comunicaciones"; // Importa tu pantalla de cámaracámara

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="ComunicacionesScreen" component={ComunicacionesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
