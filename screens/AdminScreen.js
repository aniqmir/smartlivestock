import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import {Card,Image} from 'react-native-elements';

class Admin extends React.Component{
    static navigationOptions = {
        headerTintColor: '#fff',
        drawerLabel: 'Admin',
        headerStyle:{
          backgroundColor:'steelblue',
        }
      }
    render() {
        return(
          <Card 
          image={{uri:'https://banner2.kisspng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg'}}
          title={'Admin Information'}
          titleStyle={styles.textStyle}
         >
          <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Admin Name</Text>
                <Text style={styles.textStyle}>Pakistan</Text>
                <Text style={styles.textStyle}>No. of Animals: 10</Text>
          </View>
          </Card>
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
    }
  });
export default Admin;