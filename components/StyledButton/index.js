import React from "react";
import { View, Pressable, Text } from "react-native";
import styles from "./styles";

export const StyledButton = ({ type ,onPress,content}) => {
  const backgroundColor = type === "primary" ? "black" : "white";
  const color = type == "primary" ? "white" : "black";
  console.log('bjjghj',backgroundColor,type,color)

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={[
          styles.button,
          { backgroundColor: backgroundColor, },
        ]}
      >
        <Text style={[styles.text,{color: color }]}>{content}</Text>
      </Pressable>
    </View>
  );
};
