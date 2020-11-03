//import { styles } from "../../styles/styles";

import React,{Component} from 'react';
import styles from "../../styles/auth-style";
import {Keyboard, KeyboardAvoidingView, 
    SafeAreaView, Text, TextInput,TouchableOpacity, 
    TouchableWithoutFeedback,View} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
const userInfo={username:'admin',password:'123'}
 

class Login extends Component {

constructor(props){
    
    super(props);
    this.state={
        username:'',
        password:'',
    } 
    
}

async componentDidMount() {  
    const storedUser=await AsyncStorage.getItem('USERNAME');
     const storesPass=await AsyncStorage.getItem('PASSWORD');
     if(userInfo.username === storedUser && userInfo.password === storesPass){
      //if(storedUser!==null && storesPass!==null){
            this.props.navigation.navigate('app') 
    }
    else{
        this.props.navigation.navigate('Login')
    }
}

/*
retrieveFunc=async()=>{
    
     const storedUser=await AsyncStorage.getItem('USERNAME');
     const storesPass=await AsyncStorage.getItem('PASSWORD');
     if(userInfo.username === storedUser && userInfo.password === storesPass){
      //if(storedUser!==null && storesPass!==null){
            this.props.navigation.navigate('app') 
    }
    else{
        this.props.navigation.navigate('Login')
    }
  }
  */
loginFunc=async()=>{
  if(userInfo.username === this.state.username && userInfo.password === this.state.password){
   await AsyncStorage.setItem('USERNAME',this.state.username);
   await AsyncStorage.setItem('PASSWORD',this.state.password);
   this.props.navigation.navigate('app')
  }
 else{
     alert("Incorrect Username/Password")
 }
}
  render() {
      return (
          <SafeAreaView style={styles.container}>
              <KeyboardAvoidingView behavior='padding' style={styles.container}>
                  <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                      <View style={styles.container}>
                          <View style={styles.container}>
                              <Text style={styles.title}>
                                  LOGIN INFO
                              </Text>
                              <View style={styles.infoContainer}>
                                  <TextInput style={styles.input}
                                      placeholder='Username/Email'
                                      placeholderTextColor='rgba(255,255,255,0.8)'
                                      keyboardType='email-address'
                                      returnKeyType='next'
                                      autoCorrect={false}
                                      autoCapitalize="none"
                                      onSubmitEditing={()=>this.refs.txtPassword.focus()}
                                      onChangeText={(username) => this.setState({username})}
                                      value={this.state.username}
                                 />
                                  <TextInput style={styles.input}
                                      placeholder='Password'
                                      placeholderTextColor='rgba(255,255,255,0.8)'
                                      returnKeyType='go'
                                      autoCorrect={false}
                                      autoCapitalize="none"
                                      secureTextEntry
                                      ref={"txtPassword"}
                                      onChangeText={(password) => this.setState({password})}
                                      value={this.state.password}
                                  />
                                  <TouchableOpacity style={styles.buttonContainer} onPress={this.loginFunc} >
                                      <Text style={styles.buttonText}>
                                          LOGIN
                                      </Text>
                                      </TouchableOpacity>
                              </View>
                          </View>
                      </View>
                  </TouchableWithoutFeedback>
              </KeyboardAvoidingView>

          </SafeAreaView>
      )
  }
}


export default Login;