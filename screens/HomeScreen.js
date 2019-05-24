import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import  { createStackNavigator, createAppContainer ,createMaterialTopTabNavigator} from 'react-navigation';

import DevicesScreen from './DevicesScreen.js';
import AdminScreen from './AdminScreen.js';
import SettingScreen from './SettingScreen.js';
import ModalScreen from './Modal.js';
import AnalyticsScreen from './Analytics.js';

class Home extends React.Component{
    static navigationOptions ={
        headerLeft: null,
        title:"Home",
        headerStyle:{
            color:'white'
        },
        headerRight: (
                <View style={{flex:1,flexDirection:'row',paddingRight:15}}> 
                <Icon
                  name="user"
                  size={20}
                  color="steelblue"
                  onPress={() => alert('This is a button!')}
                  iconStyle={{position:'relative',paddingRight:10}}
                  type='font-awesome'
                />
                <Icon
                  name="cogs"
                  size={20}
                  color="steelblue"
                  onPress={() => alert('This is a button!')}
                  iconStyle={{position:'relative'}}
                  type='font-awesome'
                />
                </View>
            ),
    }
    render() {
        return(
            <RunThis/>
        )
    }
}

const AppDrawerNavigator = createMaterialTopTabNavigator(
      {
      Admin:AdminScreen,
      Devices:DevicesScreen,
      Settings:SettingScreen,
      },
      {
          tabBarOptions: {
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'steelblue',
        },
      }
    }
  )

  const RootStack = createStackNavigator(
    {
      Main: {
        screen: AppDrawerNavigator,
      },
      MyModal: {
        screen: ModalScreen,
      },
      Analytics:{
        screen:AnalyticsScreen
      }
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  );

  const RunThis = createAppContainer(RootStack);

  export default Home;