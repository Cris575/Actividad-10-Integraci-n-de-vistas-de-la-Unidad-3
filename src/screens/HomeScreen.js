import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Integración de vistas</Text>
      <View style={styles.buttonContainer}>
        <Button title="Cámara" onPress={() => navigation.navigate("Camera")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Comunicaciones"
          onPress={() => navigation.navigate("ComunicacionesScreen")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Geolocalización" onPress={() => navigation.navigate("Geolocalizacion")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Almacenamiento" onPress={() => navigation.navigate("Almacenamiento")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;
