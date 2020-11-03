import React,{Component} from 'react';
import {Text,View,Button, } from "react-native"; 
import AsyncStorage from '@react-native-community/async-storage'

class Home extends Component{
 
  myFunction(){
    AsyncStorage.clear();
    this.props.navigation.navigate('login')
  }
    render()
    {
     return(
       
  <View >
  <Button onPress={()=>{this.myFunction()}} title="Logout" />
    <Text>Home Page</Text>
  </View>
    )
    }
  }

  
  export default Home;