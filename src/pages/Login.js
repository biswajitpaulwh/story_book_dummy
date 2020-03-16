import React, { Component } from 'react';
import {StyleSheet,View,Text,StatusBar,TextInput,TouchableOpacity,AsyncStorage,Image} from 'react-native';



export default class Login extends Component {

   static navigationOptions =  {
            //header: null
    };

  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password : ""
    }
  }

  

  loadHome() {
    this.props.navigation.navigate('MainScreen');
  }

  validate_field=()=> {
    
    const {email, password} = this.state
    if(email == "") {
      alert("Email can not be blank")
      return false
    } else if(!validate_email(email)) {
      alert("Email is not valid")
      return false
    } else if(password == "") {
      alert("Password is invalid")
      return false
    }
    return true
    
  }

  performLogin= async ()=> {
      const {email, password} = this.state

      
      
      this.props.navigation.navigate('MainScreen');
  }

  storeLogin = async ()=> {
    await AsyncStorage.setItem('isLoggedin', '1');
  }

  render() {

    

  return (
    <View style={styles.sectionContainer}>
      <Image style={{width: 100, height: 100}} source={require('../images/logo.jpg')}/>
      <Text style={{color: '#ffffff', fontSize: 30, paddingBottom: 100}}> Welcome to Story Book</Text>

      <TextInput style={styles.textInputBox} 
      underlineColorAndroid='rgba(0,0,0,0)' 
      placeholder="Email"
      placeholderTextColor="#ffffff" 
      selectionColor="#ffffff"
      keyboardType="email-address"
      onChangeText={(value)=>this.setState({email:value})}/>

      <TextInput style={styles.textInputBox} 
      underlineColorAndroid='rgba(0,0,0,0)' 
      placeholder="Password"
      secureTextEntry={true}
      placeholderTextColor="#ffffff"
      selectionColor="#ffffff" 
      onChangeText={(value)=>this.setState({password:value})}/>

      <TouchableOpacity style={styles.button} onPress={this.performLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Don't have account yet? </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={styles.signupButton} >SignUp</Text>
        </TouchableOpacity>


      </View>


    </View>

    
  );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
      backgroundColor: '#003680',
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 40, 
  },

  textInputBox: {
      width: 300,
      backgroundColor: '#475faf',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#ffffff',
      marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#002a66',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 20,
    
    color: '#ffffff',
    textAlign: 'center'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },

  signupText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 16
  },
  signupButton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  
});