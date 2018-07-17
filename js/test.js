import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import {
    StackNavigator,
    
} from 'react-navigation';
import Details from './Details';

export default class Test extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity style={{height:60,backgroundColor:'orange',justifyContent: 'center',}} 
                onPress={() =>this.props.navigation.navigate('Details')
                }>                  
                </TouchableOpacity>
            </View>
        )
    }
}

const MyTest = StackNavigator(
    {
        View1:{screen:Test},
        View2:{screen:Details}
    }
)


//export default MyTest;