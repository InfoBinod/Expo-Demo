import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View ,AsyncStorage} from 'react-native';
import { createSwitchNavigator,createAppContainer } from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack'
import Loading from './src/screens/Loading'
import SignUp from './src/screens/SignUp'
import Login from './src/screens/Login'
import Home from './src/screens/Home'
import Dashboard from './src/pages/Dashboard';
import Profile from './src/pages/Profile';
import Setting from './src/pages/Setting';
import Icon from 'react-native-vector-icons/Ionicons';
//import config from './src/common/constants.js';

const AppBottomTabNavigator = createBottomTabNavigator(
  {
    
  
    Dashboard:{
      screen:Dashboard,
      
      navigationOptions:{
        
        tabBarLabel : 'Dashboard',
        tabBarIcon : ({tintColor,focused}) => (
          <Icon name = 'ios-home' size={24}/>
        )
        
      }
    },
    Profile:{
      screen:Profile,
      navigationOptions:{
        
        tabBarLabel : 'Profile',
        tabBarIcon : ({tintColor}) => (
          <Icon name = 'ios-person' size={24}/>
        )
      }
    },
    Setting:{
      screen:Setting,
      navigationOptions:{
        tabBarLabel : 'Settings',
        tabBarIcon : ({tintColor}) => (
          <Icon name = 'ios-settings' size={24}/>
        )
      }
    }
      
    
    

  },
  
  {
  navigationOptions:({navigation}) => {
    const { routeName } = navigation.state.routes
    [navigation.state.index];
    return{
      headerTitle:routeName
    }
  }}
  );



const AuthStack = createStackNavigator({
  SignUp,
    Login
})

const AppStack = createStackNavigator({
  Home:AppBottomTabNavigator
}
)


export default createAppContainer(createSwitchNavigator(
  {
    Loading: Loading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Loading',
  }
));
