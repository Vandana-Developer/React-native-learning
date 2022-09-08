import React from "react";
import { View, Image } from "react-native";
import styles from "../Header/styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Image source={require("../../assets/menu.png")} style={styles.menu} />
    </View>
  );
};

export default Header;
