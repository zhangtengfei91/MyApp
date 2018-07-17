import React,{Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

import {
    StackNavigator,
    
} from 'react-navigation';
import Details from './Details';
import  { createStackNavigator }  from 'react-navigation';


class Test extends Component{

    static navigationOptions = {
        title: 'Welcome'
      };

      render() {
        const {navigate} = this.props.navigation;
        return <View>
          <Text>Hello, Chat App!</Text>
          <Button
              onPress={() => navigate('Chat', {user: 'Lucy'})}
              title="Chat with Lucy"
          />
        </View>
      }
}

  
  const RootNavigator = createStackNavigator({
    Home: {
      screen: Test
    },
    Chat: {
      screen: Details,
    },
  });



export default RootNavigator;


