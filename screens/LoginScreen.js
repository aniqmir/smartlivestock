import React from 'react';
import { View, Text, StyleSheet,KeyboardAvoidingView } from 'react-native';
import {Input,Button,Image  } from 'react-native-elements';

class Login extends React.Component{

  static navigationOptions = {
    headerTintColor: '#fff',
    title:"Smart LiveStock",
    headerStyle:{
      backgroundColor:'steelblue',
    }
  }

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      visable:false,
      errorUsername:'',
      errorPassword:''
    }
  }

  login = () => {
    // if(this.state.username.toUpperCase()==='ABC' && this.state.password==='123'){
      this.props.navigation.navigate('Home')
    //   this.setState({
    //     errorUsername:'',
    //     errorPassword:'',
    //     username:'',
    //     password:''

    //   })
    // }
    // else{
    //   this.setState({
    //     errorUsername:"Invalid Username",
    //     errorPassword:"Invalid Password",
    //     username:'',
    //     password:''
    //   })
    // }
  }
    render(){

        return(
            <KeyboardAvoidingView style={styles.viewStyle} behavior="padding" enabled>
                <Image
                  source={{ uri: 'https://www.livestocking.net/wp-content/uploads/2015/01/signs-of-good-health-and-ill-health-in-farm-animals.png' }}
                  style={{ width: 200, height: 100 }}
                />
                <Input
                placeholder='Username'
                // leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                shake={true}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                onChangeText={username => this.setState({ username })}
                value={this.state.username}
                errorMessage={this.state.errorUsername}
                errorStyle={{paddingLeft:25}}
                />
                <Input
                placeholder='Password'
                // leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                shake={true}
                secureTextEntry={true}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                onChangeText={password => this.setState({ password })}
                error={this.state.error}
                value={this.state.password}
                errorMessage={this.state.errorPassword}
                errorStyle={{paddingLeft:25}}
                />
                <Button 
                title="Sign In" 
                type="clear" 
                raised={true}
                titleStyle={styles.textStyle}
                onPress={()=>this.login()}
                />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle:{
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'snow',
      justifyContent:"center",
      alignItems:"center",

    },
    textStyle:{
      fontSize:20,
    },
    inputContainerStyle:{
      borderRadius:75,
      borderWidth:0.5,
      borderColor:'black',
      paddingBottom:5,
      margin:10
    },
    inputStyle:{
      paddingLeft:10
    }
  });

export default Login;