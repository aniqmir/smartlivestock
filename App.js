import React from 'react';
// import { StyleSheet, Text, View,ScrollView } from 'react-native';

import  { createStackNavigator, createAppContainer,createDrawerNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen.js';
import HomeScreen from './screens/HomeScreen.js';

export default class App extends React.Component {
  render() {
    return (
      <RunThis/>
    );
  }
}

const MainNavigator = createStackNavigator (
  {
  Login:LoginScreen,
  Home:HomeScreen,
  },
  {
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor:'steelblue'
      }
    }
  }
);

// const AppDrawerNavigator = createDrawerNavigator(
//   {
//     Login:LoginScreen,
//     Devices:DevicesScreen
//     },
//     {
//       defaultNavigationOptions:{
//         headerStyle:{
//           backgroundColor:'steelblue'
//         }
//       }
//     }
// )

const RunThis = createAppContainer(MainNavigator);

