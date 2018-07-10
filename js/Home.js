import React,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';


export default class Home extends Component{
    render(){
        return(
            <View style={styles.contain}>
                <Text>
                    首页
                </Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    contain:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})