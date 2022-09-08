import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    width: "100%",
    alignItems: "center",
    marginTop: "10%",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62'
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    bottom: 40,
  },
  taglineCTA: {
    textDecorationLine: "underline",
  },
});

export default styles;
