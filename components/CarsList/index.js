import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem";
import styles from "../CarsList/styles";
import Cars from "./Cars";

const CarsList = () => {
  console.log("Cars", Cars);
  return (
    <View style={styles.container}>
      <FlatList
        data={Cars}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        renderItem={(val) => <CarItem cars={val.item} />}
      />
    </View>
  );
};

export default CarsList;
