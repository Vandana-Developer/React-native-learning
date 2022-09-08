import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";
import { StyledButton } from "../StyledButton";

export default function CarItem({cars}) {
    const { name, tagline, image, taglineCTA } =cars
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} {' '}<Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type={"primary"}
          content={"Custom order"}
          onPress={() => console.warn("custom order is clicked")}
        />
        <StyledButton
          type={"secondary"}
          content={"existing inventory"}
          onPress={() => console.warn("existing inventory is clicked")}
        />
      </View>
    </View>
  );
}
