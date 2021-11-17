import { StatusBar } from "expo-status-bar";
import { Box, NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import ShopDetail from "./components/ShopDetail";
import ShopList from "./components/ShopList";
import RootNavigator from "./components/Navigation";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <View style={styles.container}> */}
          {/* <Home /> */}
          {/* <ShopList /> */}
          {/* <ShopDetail /> */}
          <RootNavigator />
        {/* </View> */}
      </NavigationContainer>
    </NativeBaseProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
