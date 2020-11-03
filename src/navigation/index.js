import React,{ Component } from "react";
import { createSwitchNavigator,createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import login from "../pages/auth/login";
import home from "../pages/home";
import profile from '../pages/profile';


const loginStack = createStackNavigator({
    Login: login,
  });
  // Add all screens for Home Stack
  const homeStack = createStackNavigator({
    Home: home,
  });
  const profileStack = createStackNavigator({
    Profile: profile,
  });
 const MainTab = createBottomTabNavigator({
    Home: {
      screen: homeStack,
      navigationOption:{
        title:'Home',
     },
    },
    Profile:{
        screen: profileStack,
        navigationOption:{
          title:'Profile',
       },
    },
  });
  var SwitNav = createSwitchNavigator({
    login: loginStack,
    app: MainTab,
  });
 

  export var AppContainer = createAppContainer(SwitNav);

 
