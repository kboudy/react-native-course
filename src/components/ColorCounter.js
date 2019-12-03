import React, { useState } from "react";
import { StyleSheet, Button, View, Text, FlatList } from "react-native";

const ColorCounter = ({ color, colorLevel, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        style={styles.text}
        title={`More ${color}`}
        onPress={onIncrease}
      />
      <Button
        style={styles.text}
        title={`Less ${color}`}
        onPress={onDecrease}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ColorCounter;
