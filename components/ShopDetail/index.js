import { Spinner } from 'native-base';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { baseURL } from '../../stores/instance';
// import { observer } from 'mobx-react';
import shopStore from '../../stores/shopStore';
import ProductList from '../ProductList';
// import { Spinner } from 'native-base';


const ShopDetail = ({ navigation, route }) => {
    if (shopStore.isLoading) return <Spinner/>
    const { shop }  = route.params;
    return (
        <View>
            <Text style= {{fontSize: 24, fontWeight:"bold", margin: 5}}>
            {shop.name}
        </Text>
            <Image source={{ uri: baseURL + shop.image }} 
            style={{
                width: 50, 
                height: 50,
          textAlign: "center",
          paddingTop: "50",
          margin: "30"
            }}/>
            <ProductList products={shop.products}/>

        </View>
    )
}

export default ShopDetail;

const styles = StyleSheet.create({})
