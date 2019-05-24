import React from 'react';
import {View,Text, StyleSheet,AppRegistry,ScrollView} from 'react-native';

// import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const data = [
    cow1 = {
        name:'cow1',
        temp:'50C',
        condition:'good',
        weight:'350KG',
        id:'1',
        image:"https://image.freepik.com/free-vector/cow-illustration_23-2147511214.jpg?1"
    },
    cow2 = {
        name:'cow2',
        temp:'50C',
        condition:'warning',
        weight:'350KG',
        id:'2',
        image:"https://image.freepik.com/free-vector/cow-illustration_23-2147511214.jpg?1"
    },
    cow3 = {
        name:'cow3',
        temp:'50C',
        condition:'okay',
        weight:'350KG',
        id:'3',
        image:"https://image.freepik.com/free-vector/cow-illustration_23-2147511214.jpg?1"
    },
    cow4 = {
        name:'cow4',
        temp:'50C',
        condition:'good',
        weight:'350KG',
        id:'4',
        image:"https://image.freepik.com/free-vector/cow-illustration_23-2147511214.jpg?1"
    },
    cow5 = {
        name:'cow5',
        temp:'50C',
        condition:'warning',
        weight:'350KG',
        id:'5',
        image:"https://image.freepik.com/free-vector/cow-illustration_23-2147511214.jpg?1"
    },
    cow6 = {
        name:'cow6',
        temp:'50C',
        condition:'warning',
        weight:'350KG',
        id:'6',
        image:"https://image.freepik.com/free-vector/cow-illustration_23-2147511214.jpg?1"
    },
    cow7 = {
        name:'cow7',
        temp:'50C',
        condition:'okay',
        weight:'350KG',
        id:'7',
        image:"https://image.freepik.com/free-vector/cow-illustration_23-2147511214.jpg?1"
    },
    cow8 = {
        name:'cow8',
        temp:'50C',
        condition:'good',
        weight:'350KG',
        id:'8',
        image:"https://image.freepik.com/free-vector/cow-illustration_23-2147511214.jpg?1"
    },
    cow9 = {
        name:'cow9',
        temp:'50C',
        condition:'good',
        weight:'350KG',
        id:'9',
        image:"https://image.freepik.com/free-vector/cow-illustration_23-2147511214.jpg?1"
    },
    cow10 = {
        name:'cow10',
        temp:'50C',
        condition:'okay',
        weight:'350KG',
        id:'10',
        image:"https://image.freepik.com/free-vector/cow-illustration_23-2147511214.jpg?1"
    }
]
class Devices extends React.Component{

    static navigationOptions = {
        headerTintColor: '#fff',
        drawerLabel: 'Devices',
        title:'Devices',
        headerStyle:{
          backgroundColor:'steelblue',
        }
      }

      openDetails = (id) => {
        console.log(id)
        this.props.navigation.navigate('MyModal', {
            itemId: id,
            // otherParam: 'anything you want here'
        }
            )
    }
    render() {
        return (
            <ScrollView>
                {
                    data.map((type,key)=>{
                        if(type.condition==='good'){
                            return(
                                <Card key={key} 
                                // style={styles.viewStyle}
                                >
                                 <ListItem
                                    key={key}
                                    roundAvatar
                                    title={type.name}
                                    titleStyle={{fontSize:18}}
                                    subtitle={ 
                                    <View>
                                    <Text>{type.temp}</Text>
                                    <Text>{type.weight}</Text>
                                    </View>
                                    }
                                    // checkmark={type.condition}
                                    leftAvatar={{ source: { uri: type.image } }}
                                    onPress={()=>this.openDetails(type.id)}
                                    badge={{status:"success",badgeStyle:{width:15,height:15,borderRadius:100} }}
                                    />
                                {/* <Text>Name:{type.name}</Text>
                                <Text>Temprature:{type.temp}</Text>
                                <Text>Condition:{type.condition}</Text> */}
                                </Card>
                                )
                        }
                        else if(type.condition==='okay'){
                            return(
                                <Card key={key} 
                                // style={styles.viewStyle}
                                >
                                 <ListItem
                                    key={key}
                                    roundAvatar
                                    title={type.name}
                                    titleStyle={{fontSize:18}}
                                    subtitle={ 
                                        <View>
                                        <Text>{type.temp}</Text>
                                        <Text>{type.weight}</Text>
                                        </View>
                                        }
                                    // checkmark={type.condition}
                                    leftAvatar={{ source: { uri: type.image } }}
                                    onPress={()=>this.openDetails(type.id)}
                                    badge={{status:"warning",badgeStyle:{width:15,height:15,borderRadius:100} }}
                                    />
                                {/* <Text>Name:{type.name}</Text>
                                <Text>Temprature:{type.temp}</Text>
                                <Text>Condition:{type.condition}</Text> */}
                                </Card>
                                )
                        }
                        else {
                            return(
                                <Card key={key} 
                                // style={styles.viewStyle}
                                >
                                 <ListItem
                                    key={key}
                                    roundAvatar
                                    title={type.name}
                                    titleStyle={{fontSize:18}}
                                    subtitle={ 
                                        <View>
                                        <Text>{type.temp}</Text>
                                        <Text>{type.weight}</Text>
                                        </View>
                                        }
                                    // checkmark={type.condition}
                                    leftAvatar={{ source: { uri: type.image } }}
                                    onPress={()=>this.openDetails(type.id)}
                                    badge={{status:"error",badgeStyle:{width:15,height:15,borderRadius:100} }}
                                    />
                                {/* <Text>Name:{type.name}</Text>
                                <Text>Temprature:{type.temp}</Text>
                                <Text>Condition:{type.condition}</Text> */}
                                </Card>
                                )
                        }
                    })
                }
             </ScrollView>
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
    },
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
      },
      ratingImage: {
        height: 19.21,
        width: 100
      },
      ratingText: {
        paddingLeft: 10,
        color: 'grey'
      }
  });

export default Devices;