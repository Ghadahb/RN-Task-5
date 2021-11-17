import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { baseURL } from '../../stores/instance';
import { observer } from 'mobx-react';
import shopStore from '../../stores/shopStore';
import ProductList from '../ProductList';


const ShopDetail = () => {
    // if(shopStore.isLoading) return <Spinner />;
    const shop = shopStore.shops[0];
    return (
        <View>
            <Text style= {{fontSize: 24, fontWeight:"bold", margin: 5}}>
            {shop.name}
        </Text>
            <Image source={{ uri: baseURL + shop.image }} 
            style={{
                width: 50, 
                height: 50
            }}/>
            <ProductList products={shop.products}/>

        </View>
    )
}

export default observer(ShopDetail);

const styles = StyleSheet.create({})