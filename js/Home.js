import React,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';
import Header from "./Home/Header";


export default class Home extends Component{
    render(){
        return(
            <View style={styles.contain}>
                <Header/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    contain:{
        flex:1,
        height:70,
        //justifyContent: 'center',
        alignItems: 'center',
    }
})