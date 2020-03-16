/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet,View,Text,StatusBar,ActivityIndicator,AsyncStorage} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from "./src/pages/MainScreen";
import Login from "./src/pages/Login";
import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.loadData();
  }

  // Fetch the token from storage then navigate to our appropriate place
  loadData = async () => {
    const userToken = await AsyncStorage.getItem('isLoggedin');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.

    console.log(userToken);
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.sectionContainer}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const AppStack = createStackNavigator({
  MainScreen: {
    screen: MainScreen
  }
}
,
  {
    headerMode: 'none',
    //navigationOptions: {headerStyle: {backgroundColor:'#898989'}}
  }

);

const AuthStack = createStackNavigator(
  {
    Login : Login,
  },
  {
    headerMode: 'none',
    navigationOptions: {headerVisible: false,}
  }
);


export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));


const styles = StyleSheet.create({
  sectionContainer: {
      backgroundColor: '#003680',
      flex:1,
      justifyContent: 'center',
  },
  
});