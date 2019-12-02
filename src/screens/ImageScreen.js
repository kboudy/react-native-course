import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        imageSource={require("../../assets/forest.jpg")}
        title="Forest"
      />
      <ImageDetail
        imageSource={require("../../assets/beach.jpg")}
        title="Beach"
      />
      <ImageDetail
        imageSource={require("../../assets/mountain.jpg")}
        title="Mountain"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
