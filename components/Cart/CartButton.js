import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from "native-base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const CartButton = () => {
    const navigation = useNavigation();
    return (
        <View>
           <Icon name="cart" size= {30}
           onPress={() => navigation.navigate("Cart")}
            />
        </View>
    );
};

export default CartButton;

const styles = StyleSheet.create({})
