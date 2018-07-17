/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Tabs from './js/TabNavigator'
import Home from './js/Home'
import MyTest from './js/test'
import Details from './js/test'
import {
  StackNavigator,
  
} from 'react-navigation';

export default class MyApp extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Tabs/>
        </View>

    );
  }
}



const styles = StyleSheet.create({
  container: { 
    flex: 1,
    //backgroundColor:'red',
  },

});

AppRegistry.registerComponent('MyApp', () => MyApp);
