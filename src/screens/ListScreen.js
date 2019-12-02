import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ListScreen = () => {
  return (
    <View>
      <Text style={styles.text}>ListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ListScreen;
