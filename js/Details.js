import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class ChatScreen extends Component {
    render() {
      const {params} = this.props.navigation.state;
      return (
          <View>
            <Text>Chat with </Text>
          </View>
      );
    }
  }