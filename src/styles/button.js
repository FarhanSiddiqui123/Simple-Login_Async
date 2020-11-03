import React,{Component} from'react';
import { StyleSheet ,Text,View,TouchableOpacity } from "react-native";

const loginButton = props =>{
  const content=(
    <View style={[styles.button,{backgroundColor: props.color}]}>
    <Text style={styles.text}>{props.text}</Text>
    </View>
  )
return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>

}


const styles=StyleSheet.create({
  button:{
    padding: 20, 
    width: 200,
    borderRadius: 24,
    alignItems:'center',
    //justifyContent:'center'
  },
  text:{
   color:'white',
   fontSize: 20 
  }
});

export default loginButton;