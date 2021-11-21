import { Image, Pressable, VStack, HStack, Button } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NumericInput from "react-native-numeric-input";
import { useState } from "react";
import cartStore from "../../stores/cartStore";
import { Navigation } from "react-native";
import { baseURL } from "../../stores/instance";
import { observer } from "mobx-react";

const CartItem = ({ item }) => {
  const product = item.product;
  const [quantity, setQuantity] = useState(item.quantity);

  const handleAdd = (value) => {
    setQuantity(value);
    cartStore.addItemToCart(item.product, value);
  };

  return (
    
    <HStack w="100%" alignItems="center" space="3">
      <Image
        source={{
          uri: baseURL + item.product.image
        }}
        alt="image"
        style={{ width: 100, height: 100 }}
      />
      
      <Text>{item.product.name}</Text>
      <Text>{item.quantity} x {item.product.price} KWD</Text>
      <VStack>
      <VStack>
      <NumericInput 
        rounded
        totalHeight={20}
        totalWidth={40}
        initValue={1}
        iconSize={25}
        textColor="#B0228C"
        minValue={1}
        maxValue={item.quantity}
        value={quantity}
        onChange={(value) => setQuantity(value)}
      />
      <VStack>
       <Button onPress={handleAdd}>Add</Button>
       </VStack>
      </VStack>
      <Text> Total Price </Text>
       <Text> {item.quantity * item.product.price} KWD </Text>
       </VStack>

       <Button onPress={() => cartStore.removeItemFromCart(product._id)}>
         <Text>Delete</Text>
         </Button>
      
    </HStack>
  );
};

export default observer(CartItem);

const styles = StyleSheet.create({});
