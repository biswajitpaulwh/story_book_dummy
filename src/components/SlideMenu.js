import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { List, ListItem } from 'native-base';


export default class SlideMenu extends Component {

  render() {

  return (
	  
        <SafeAreaView style={{flex:1}}>
          <View style={{height:150, alignItems:'center', justifiedContent:'center'}}>
            <Image source={IMAGE.ICON_USER_DEFAULT} style={{height:120, width:120, borderRadius: 60}}/>
          </View>
        </SafeAreaView>
    
    
  );
  }
};