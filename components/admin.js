import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

class Admin extends React.Component{
    render() {
        return(
            <View style={styles.viewStyle}>
                <Text>
                    Admin
                </Text>
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
    },
    textStyle:{
        fontSize:20,
        paddingTop:5
    }
  });
export default Admin;