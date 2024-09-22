import { Text, View, StyleSheet,Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import MainScreen from './Views/MainScreen';
import Mainstyle from "./Views/Mainstyle";
import IntroScreen from './Views/IntroScreen';
import { useState } from "react";
export default function index() {
  const[isloaded,setisLoaded] = useState(false);

  setTimeout(()=>{
    setisLoaded(true);
  },2000);
  return (
    <View style={styles.container}>
      {
        isloaded?<MainScreen />:<IntroScreen />
      }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

