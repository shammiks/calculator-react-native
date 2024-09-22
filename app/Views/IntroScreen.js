import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import logo from '../../assets/images/calculator-icon-8179.png'
const IntroScreen = () => {
 return(
  <View style = {styles.container}>
    <View style = {styles.inner}>
      <Image source={logo} style={styles.innerimg}/>
    </View>
  </View>
 );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    height:'100%',
    width:'100%',
    backgroundColor:'#141414'
  },
  
  innerimg:{
    width:400,
    height:400,
  }
});
export default IntroScreen;
