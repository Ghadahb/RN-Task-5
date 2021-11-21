import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import CartList from "../Cart/CartList";
import CartButton from "../Cart/CartButton";
import Signin from "../authentication/Signin";


const RootNavigator = () => { 
  const { Navigator, Screen } = createStackNavigator();
  // const [user, setUser] = useState({
  //   username: "",
  //   password: "",
  // });

  return (
    <Navigator 
    initialRouteName="Signin">
      <Screen name="Home" component={Home} 
      options={{ headerShown: false }}
      />
      <Screen name="ShopList" component={ShopList} 
      options={{
        title: 'Choose a Shop',
        headerRight: () => <CartButton />,
        headerStyle:  {
          backgroundColor: `#ff7f50`,
          headerTintColor: '#fff',
          opacity: 500,
          fontWeight: "bold",
          name: 'white',
          
        },
      }}
      />
      <Screen name="ShopDetail" component={ShopDetail} 
      options={({ route }) => {
        const { shop } =  route.params;
        return {
          title: shop.name,
          headerRight: () => <CartButton />,
          headerStyle:  {
            backgroundColor: `#ff7f50`,
            headerTintColor: '#fff',
          }
        };
      }}
      />
        
        <Screen name="CartList" component={CartList} />
        <Screen name="Signin" component={Signin} options={{
          headerShown: false }} />
    </Navigator>
  );
}

export default RootNavigator;

const styles = StyleSheet.create({});
