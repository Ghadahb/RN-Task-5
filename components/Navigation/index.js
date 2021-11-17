import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";

const { Navigator, Screen } = createStackNavigator();

export default function RootNavigator() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="ShopList" component={ShopList} />
      <Screen name="ShopDetail" component={ShopDetail} />
    </Navigator>
  );
}

const styles = StyleSheet.create({});
