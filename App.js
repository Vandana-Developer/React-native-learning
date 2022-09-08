import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CarsList from "./components/CarsList";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <CarsList/>
      {/* <CarItem name={'Model S'} tagline={'Order online for'} taglineCTA={'Touchless Delivery'} image={require("./assets/Model3.jpeg")} />
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
