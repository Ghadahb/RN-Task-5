import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CartItem from './CartItem';
import cartStore from '../../stores/cartStore';
import { Center, VStack } from  'native-base';

const CartList = () => {
    const cartList = cartStore.items.map((item) => (
        <CartItem item={item} key={item.product._id} />
    ));
    return (
        <Center>
            <VStack space="6">{cartList}</VStack>
        </Center>
    );
};

export default CartList;

const styles = StyleSheet.create({})
