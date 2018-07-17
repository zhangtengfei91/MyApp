import React,{Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {
    StackNavigator,
    TabNavigator,
    createBottomTabNavigator,
    createTopTabNavigator,
} from 'react-navigation';
import Home from '../Home'
const Dimensions = require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;

export default class Menu extends Component{
    
    render(){
        return(
            <View style={styles.menu}>
                <View style={styles.box}>
                    <TouchableOpacity style={{height:60,backgroundColor:'orange',justifyContent: 'center',}}
                            
                            onPress={() =>this.props.navigation.navigate('Chat')}
                            >
                    <Image style={styles.icon} source={require('../../images/icon/market.png')}/>
                    <Text style={styles.txt}>京东超市</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <Image style={styles.icon}  source={require('../../images/icon/hotel.png')}/>
                    <Text style={styles.txt}>机票酒店</Text>
                </View>
                <View style={styles.box}>
                    <Image style={styles.icon}  source={require('../../images/icon/coloth.png')}/>
                    <Text style={styles.txt}>京东服饰</Text>
                </View>
                <View style={styles.box}>
                    <Image style={styles.icon} source={require('../../images/icon/fruit.png')}/>
                    <Text style={styles.txt}>京东生鲜</Text>
                </View>
                <View style={styles.box}>
                    <Image style={styles.icon} source={require('../../images/icon/food.png')}/>
                    <Text style={styles.txt}>京东到家</Text>
                </View>
                <View style={styles.box}>
                    <Image style={styles.icon} source={require('../../images/icon/money.png')}/>
                    <Text style={styles.txt}>充值缴费</Text>
                </View>
                <View style={styles.box}>
                    <Image style={styles.icon} source={require('../../images/icon/global.png')}/>
                    <Text style={styles.txt}>全球购</Text>
                </View>
                <View style={styles.box}>
                    <Image style={styles.icon} source={require('../../images/icon/refresh.png')}/>
                    <Text style={styles.txt}>拍拍二手</Text>
                </View>
            </View>
        )
    }
}




const styles=StyleSheet.create({
    contain:{
        flex:1,
    },

    menu:{
        backgroundColor:'#f0ffff',
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
    },

    box:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#dcdcdc',
        width:ScreenWidth/4,
        height:ScreenWidth/6,
    },

    icon:{
        height:40,
        width:40
    },

    txt:{
        color:'#696969',
        fontFamily:'Cochin',
        fontSize:12
    }

})