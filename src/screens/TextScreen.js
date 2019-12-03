import React, { useState } from "react";
import { StyleSheet, Button, View, Text, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password:</Text>
      {password.length < 4 ? (
        <Text>Password must be at least 4 characters</Text>
      ) : null}
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;
