import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CartItem from "./CartItem";
import cartStore from "../../stores/cartStore";
import { Center, VStack } from "native-base";
import { observer } from "mobx-react";

const CartList = () => {
  const cartList = cartStore.items.map((item) => (
    <CartItem key={item.product._id} item={item} />
  ));
  return (
    <View>
      <VStack space="6">{cartList}</VStack>
      <Button onPress={cartStore.checkout}>Checkout</Button>
    </View>
  );
};

export default observer(CartList);

const styles = StyleSheet.create({});
