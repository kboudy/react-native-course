import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ImageDetail = ({ imageSource, title }) => {
  return (
    <View>
      <Image source={imageSource}></Image>
      <Text style={styles.text}>Title is {title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
