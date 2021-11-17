import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Center, Container } from "native-base";
import { ImageBackground } from "react-native";

const Home = () => {
  return (
    <View>
      <Center flex={1}>
        <Text style={{fontSize: 24, fontWeight:"bold", margin: 5}}>
          Welcome
        </Text>
        <Text style= {{
            fontSize: 20, 
            // textDecoration: "underline", 
            margin: 7}}> 
        مرحبا
        </Text>
        <Text style= {{fontSize: 18, fontWeight:"bold", margin: 7}}> 
        Bienvenue 
        </Text>
        <Text style= {{
            fontSize: 15, 
            // letterSpacing:"2x1", 
            margin: 7}}> 
        Benvenuto 
        </Text>
        <Button style= {{
            margin: 40, 
            alignContent: "center",
            backgroundColor: "black"}}> 
            Shops List
            {/* onPress={() => Alert.alert('Simple Button pressed')} */}
      </Button>
      </Center>
      <ImageBackground
            style={{flex: 1, width: "100%", height: "100%", justifyContent: "center", flexDirection: "column", padding:10, margin: -96.6}}
            source={{
                uri: "https://images.unsplash.com/photo-1485348616965-15c926318fbb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3RvcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
            }}
            >
            </ImageBackground>
           </View>

  );
};

export default Home;

const styles = StyleSheet.create({});
