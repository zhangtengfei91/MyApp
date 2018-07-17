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

class MyApp1 extends Component {
  render() {
    return (
        <View style={styles.container}>
            <MyTest navigation={this.props.navigation}/>
        </View>

    );
  }
}

export default MyApp = StackNavigator(
  {
      View1:{screen:MyApp1},
      View2:{screen:Details}
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

AppRegistry.registerComponent('MyApp', () => MyApp);
