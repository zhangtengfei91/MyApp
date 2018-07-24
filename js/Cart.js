import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Cart extends Component{
    
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <FatherComponent name='i am xiao tou'/>
            </View>
        )
    }
}


class FatherComponent extends Component{
    render(){
        return (
            <View>
                <SonComponent name= {this.props.name}></SonComponent>
            </View>
        )
    }
}


class SonComponent extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.name}的儿子</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:15
    },
})