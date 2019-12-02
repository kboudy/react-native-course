import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ImageDetail = ({ score, imageSource, title }) => {
  return (
    <View>
      <Image source={imageSource}></Image>
      <Text style={styles.text}>Title is {title}</Text>
      <Text style={styles.text}>Image score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
