import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import CameraScreen from "./src/screens/CameraScreen";
import ComunicacionesScreen from "./src/screens/Comunicaciones";
import GeolocalizacionScreen from "./src/screens/Geolocalizacion";
import FormularioScreen from "./src/screens/FormularioScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="ComunicacionesScreen" component={ComunicacionesScreen} />
        <Stack.Screen name="Geolocalizacion" component={GeolocalizacionScreen} />
        <Stack.Screen name="Almacenamiento" component={FormularioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
