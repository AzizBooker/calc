import React from "react";
import {
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function App() {
  return (
    <View style={styles.app}>
      <Text style={styles.text}>CALC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight,
    width: windowWidth,
    backgroundColor: "#122C34"
  },
  button: {
    backgroundColor: "#6883BA"
  },
  text: {
    color: "#F9F9F9"
  }
});

export default App;
