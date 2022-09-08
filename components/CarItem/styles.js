import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
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
  subTitle: {
    fontSize: 16,
    color: "grey",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    position: "absolute",
  },
  buttonContainer:{
    position:'absolute',
    width:'100%',
    bottom:40
},
taglineCTA:{
    textDecorationLine:'underline'
}
});

export default styles;
