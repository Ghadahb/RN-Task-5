// import { createStackNavigator } from "@react-navigation/stack";
import { HStack, Image, Pressable } from "native-base";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { baseURL } from "../../stores/instance";

const ShopItem = ({ shop, navigation }) => {
  return (
    <Pressable
        onPress={() => { 
          navigation.navigate('ShopDetail', { shop: shop });
        console.log('click');
      }}
      >
        <HStack w="100%" alignItems="center" space="3">
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            margin: 5,
            textAlign: "center",
            justifyContent: "center",
            resizeMode: "cover",
            textAlign: "center",
            paddingTop: "50",
            margin: "30",
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
            height: 150,
            resizeMode: "cover",
            textAlign: "center",
            paddingTop: "50",
            margin: "30",
          }}
        />
      </HStack>
      </Pressable>
  
  );
};

export default ShopItem;

const styles = StyleSheet.create({});
