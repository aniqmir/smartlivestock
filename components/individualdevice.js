import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';


let indevice = [
    device1={
    health:"good",
    temp:"normal",
    grazingtime:"50 Minutes"
}
]
class IndividualDevice extends React.Component{
    render(){
        return(
            <View style={styles.viewStyle}>
                
                {
                    indevice.map((type,key)=>{
                        
                        return(
                            <View key={key}>
                                <Text>
                                    Health: {type.health}
                                </Text>
                                <Text>
                                    Temperature: {type.temp}
                                </Text>
                                <Text>
                                    Grazing Time: {type.grazingtime}
                                </Text>
                            </View>
                        )
                    })
                }
                <Button title="Analytics" type="outline" onPress={()=>console.log('Pressed')}/>
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
      paddingTop:50,
      justifyContent:"center",
      alignItems:"center",
    },
    textStyle:{
        fontSize:20,
        paddingTop:5
    },
  });

export default IndividualDevice