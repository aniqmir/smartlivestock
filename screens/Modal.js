import React from 'react';
import {View,Text} from 'react-native';
import {Card,Button} from 'react-native-elements';

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

class ModalScreen extends React.Component {
    
    render() {
        const itemId = this.props.navigation.getParam('itemId','NO-ID');
        // const otherParam = navigation.getParam('otherParam', 'some default value');
      return(
        data.map((type,key)=>{
            // console.log(type)
            if(type.id.toString()===itemId.toString()){
                return (
                    <Card key={key}
                    image={{uri:type.image}}
                    >
                    {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} > */}
                      <Text>ID: {type.id}</Text>
                      <Text style={{ fontSize: 18 }}>Name:{type.name}</Text>
                      <Text style={{ fontSize: 18 }}>Temprature:{type.temp}</Text>
                      <Text style={{ fontSize: 18 }}>Condition:{type.condition}</Text>
                      <Text style={{ fontSize: 18 }}>Weight:{type.weight}</Text>
                      <Button
                        onPress={() => this.props.navigation.navigate('Analytics')}
                        title="Analytics"
                        containerStyle={{marginBottom:7,marginTop:7}}
                      />
                      <Button
                        onPress={() => this.props.navigation.goBack()}
                        title="Home"
                        containerStyle={{marginBottom:10,marginTop:7}}
                      />
                      
                      {/* <Text>Other: {otherParam}</Text> */}
                    {/* </View> */}
                    </Card>
                  );
            }   
          })
      )

    }
  }

export default ModalScreen;