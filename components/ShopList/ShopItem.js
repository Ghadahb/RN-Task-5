import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { baseURL } from "../../stores/instance";

const ShopItem = ({ shop }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          margin: 5,
          textAlign: "center",
          // resizeMode: "contain",
          // textAlignments: "center",
          // textAlignmentsVertical: "center"
        }}
      >
        {shop.name}
      </Text>
      <Image
        source={{ uri: baseURL + shop.image }}
        style={{
          width: 500,
          height: 100,
          resizeMode: "cover",
        }}
      />
    </View>
  );
};

export default ShopItem;

const styles = StyleSheet.create({});
