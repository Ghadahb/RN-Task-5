import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button, Center, Box, Image } from "native-base";

const image = {
  uri: "https://images.unsplash.com/photo-1485348616965-15c926318fbb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3RvcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
};

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Welcome</Text>
        <Text style={styles.text}>مرحبا</Text>
        <Text style={styles.text}>Bienvenue</Text>
        <Text style={styles.text}>Benvenuto</Text>
        <Button
          onPress={() => navigation.navigate("ShopList")}
          style={styles.button}
          title="CLICK HERE"
        >
          Shop List
        </Button>
      </ImageBackground>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  conntainer: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    padding: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    // width: "100%",
    height: "500%",
    // resizeMode: "cover",
    borderWidth: 10,
    opacity: 2,
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
    backgroundColor: "#000000c0",
  },
  button: {
    margin: 50,
    alignContent: "center",
    backgroundColor: "black",
    // elevation: 3,
    // height: 100
    padding: 20,
  },
});
