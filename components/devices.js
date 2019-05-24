import React from 'react';
import {View,Text, StyleSheet,AppRegistry} from 'react-native';


const data = [
    cow1 = {
        name:'cow1',
        temp:'50C',
        condition:"Okay"
    },
    cow2 = {
        name:'cow2',
        temp:'50C',
        condition:"Okay"
    },
    cow3 = {
        name:'cow3',
        temp:'50C',
        condition:"Okay"
    },
    cow4 = {
        name:'cow4',
        temp:'50C',
        condition:"Okay"
    },
    cow5 = {
        name:'cow5',
        temp:'50C',
        condition:"Okay"
    },
    cow6 = {
        name:'cow6',
        temp:'50C',
        condition:"Okay"
    },
    cow7 = {
        name:'cow7',
        temp:'50C',
        condition:"Okay"
    },
    cow8 = {
        name:'cow8',
        temp:'50C',
        condition:"Okay"
    },
    cow9 = {
        name:'cow9',
        temp:'50C',
        condition:"Okay"
    },
    cow10 = {
        name:'cow10',
        temp:'50C',
        condition:"Okay"
    }
]
class Devices extends React.Component{
    render() {
        return (
            <View>
                {
                    data.map((type,key)=>{
                        return(
                        <View key={key} style={styles.viewStyle}>
                        <Text>Name:{type.name}</Text>
                        <Text>Temprature:{type.temp}</Text>
                        <Text>Condition:{type.condition}</Text>
                        </View>
                        )
                    })
                }
             </View>
        )
    }
}

AppRegistry.registerComponent(
    'AwesomeProject',
    () => Devices);

const styles = StyleSheet.create({
    viewStyle:{
      backgroundColor:"#F8F8F8",
      justifyContent:"center",
      alignItems:"center",
      paddingTop:5,
      position:'relative'
    },
    textStyle:{
        fontSize:20,
        paddingTop:5
    }
  });

export default Devices;