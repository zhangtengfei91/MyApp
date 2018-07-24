import React,{Component} from 'react';
import {
    View,
    Text
 } from 'react-native'

 export default class Food extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View>
                <Text>Food</Text>
            </View>
        )
    }

 }