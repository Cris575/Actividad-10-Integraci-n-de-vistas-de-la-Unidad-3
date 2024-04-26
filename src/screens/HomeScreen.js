import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Go to Camera" onPress={() => navigation.navigate("Camera")} />
      <Button
        title="Go to Comunication"
        onPress={() => navigation.navigate("ComunicacionesScreen")}
      />
    </View>
  );
};

export default HomeScreen;
