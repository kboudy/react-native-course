import React, { useState } from "react";
import { StyleSheet, Button, View, Text, TextInput } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 100,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  viewOneStyle: {
    backgroundColor: "red",
    borderColor: "purple",
    borderWidth: 3,
    width: 100
  },
  viewTwoStyle: {
    backgroundColor: "yellow",
    borderColor: "purple",
    borderWidth: 3,
    width: 100,
    top: 100
  },
  viewThreeStyle: {
    backgroundColor: "green",
    borderColor: "purple",
    borderWidth: 3,
    width: 100
  }
});

export default BoxScreen;
