import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { setRecoveryProps } from "expo/build/ErrorRecovery/ErrorRecovery";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigate("Components")}
      ></Button>
      <Button title="Go to List Demo" onPress={() => navigate("List")}></Button>
      <Button
        title="Go to Image Demo"
        onPress={() => navigate("Image")}
      ></Button>
      <Button
        title="Go to Counter Demo"
        onPress={() => navigate("Counter")}
      ></Button>
      <Button
        title="Go to Color Demo"
        onPress={() => navigate("Color")}
      ></Button>
      <Button
        title="Go to Square Demo"
        onPress={() => navigate("Square")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
