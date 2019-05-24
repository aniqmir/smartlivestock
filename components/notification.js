import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Notification extends React.Component{
    render() {
        return(
            <View style={styles.viewStyle}>
                <Text>Notification Panel</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewStyle:{
      backgroundColor:"#F8F8F8",
      justifyContent:"center",
      alignItems:"center",
      height:60,
      paddingTop:15,
      shadowColor:"black",
      shadowOffset:{ width:0, height:2 },
      shadowOpacity:0.5,
      elevation:2,
      position:'relative'
    },
    textStyle:{
        fontSize:20,
        paddingTop:5
    }
  });
export default Notification;