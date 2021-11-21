import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, VStack, Badge } from "native-base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react';

const CartButton = () => {
    const navigation = useNavigation();
    return (
        <View>
        <VStack>
            <>
        <Badge
        bg="red.400"
        colorScheme="danger"
        rounded="999px"
        mb={-2}
        zIndex={1}
        variant="solid"
        alignSelf="flex-end"
        _text={{
            fontSize: 12,
            }}
            >
            {cartStore.totalQuantity}
                </Badge>
           <Icon 
           name="cart" 
           size= {30} 
           style={styles.cartButton}
           onPress={() => navigation.navigate("CartList")}
            />
            </>
        </VStack>
        </View>
    );
};

export default observer(CartButton);

const styles = StyleSheet.create({
    cartButton:  {
        marginRight: 20
    }
})
