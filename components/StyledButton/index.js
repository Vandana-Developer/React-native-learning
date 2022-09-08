import React from "react";
import { View, Pressable, Text } from "react-native";
import styles from "./styles";

export const StyledButton = ({ type, onPress, content }) => {
  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={[styles.button, { backgroundColor: backgroundColor }]}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};
