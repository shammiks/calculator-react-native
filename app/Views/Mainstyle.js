import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  main_screen: {
    marginTop: 80,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#17181a",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  main_screen_display: {
    elevation: 20,
    width: "95%",
    backgroundColor: "#17181a",
    borderRadius: 10,
    display: "flex",
    marginBottom: 10,
    padding: 10,
  },
  display_text: {
    color:'#ffffff',
    fontSize: 50,
    textAlign: "right",
  },
  main_screen_keypad: {
    width: "100%",
    height: "63%",
    display: "flex",
  },
  main_screen_keypad_row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  btn_outer: {
    width: 75,
    height:75,
    backgroundColor: "#303136",
    elevation: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  bg_button: {
    backgroundColor: "#303136",
    color: "#29a8ff",
    fontSize: 30,
  },
  btn1_outer: {
    width: 75,
    height: 75,
    backgroundColor: "#636363",
    elevation: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  bg1_button: {
    color: "#9f9f9f",
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "##616161",
  },
  btn2_outer: {
    width: 75,
    height: 75,
    backgroundColor: "#005db2",
    elevation: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  bg2_button:{
    backgroundColor:'#005db2',
    color:'#339dff',
    fontSize:30,
    fontWeight:'bold'
  },
  
  
});
