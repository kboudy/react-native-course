import React, { useState } from "react";
import { StyleSheet, Button, View, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const ColorScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    const newColor = color + change;
    if (newColor > 255) {
      return 255;
    } else if (newColor < 0) {
      return 0;
    }
    return newColor;
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        colorLevel={red}
        onIncrease={() => setRed(setColor(red, COLOR_INCREMENT))}
        onDecrease={() => setRed(setColor(red, -COLOR_INCREMENT))}
      />
      <ColorCounter
        color="Green"
        colorLevel={green}
        onIncrease={() => setGreen(setColor(green, COLOR_INCREMENT))}
        onDecrease={() => setGreen(setColor(green, -COLOR_INCREMENT))}
      />
      <ColorCounter
        color="Blue"
        colorLevel={blue}
        onIncrease={() => setBlue(setColor(blue, COLOR_INCREMENT))}
        onDecrease={() => setBlue(setColor(blue, -COLOR_INCREMENT))}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

export default ColorScreen;
