import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, HStack } from "native-base";
import NumericInput from "react-native-numeric-input";
import cartStore from '../../stores/cartStore';

// product.quantity: the amount of product invetory
// item.quantity: the amount the user wants to buy

const ProductItem = ({ product }) => {
    const  [quantity, setQuantity] = useState(0);

    const handleAdd = (value) => {
        cartStore.addItemToCart(product, value);
        setQuantity(value);
          
    };
    return (
        <View>
            <HStack>
        <Text> {product.name} </Text>
        <NumericInput 
        rounded
        totalHeight={20}
        totalWidth={40}
        initValue={1}
        iconSize={25}
        minValue={1}
        maxValue={product.quantity}
        textColor="#B0228C"
        value={quantity}
        onChange={(value) => setQuantity(value)}
      />
      </HStack>
        {/* <Button onPress={handleAdd}>Add to cart</Button> */}
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({})
