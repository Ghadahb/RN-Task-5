import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ShopItem from './ShopItem';
import shopStore from '../../stores/shopStore';
import { observer } from "mobx-react";
import { Center } from 'native-base';

const ShopList = ({ navigation }) => {
    const shopList = shopStore.shops.map((shop) => ( 
    <ShopItem navigation={navigation} shop={shop} key={shop._id} /> 
        ));
    return <View>{shopList}</View>
        
    
};

export default observer(ShopList);

const styles = StyleSheet.create({})
