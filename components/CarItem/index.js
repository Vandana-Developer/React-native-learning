import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";

export default function CarItem() {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/carss.jpg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at Rs.1000000</Text>
      </View>
    </View>
  );
}
