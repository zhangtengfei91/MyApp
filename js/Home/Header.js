import React,{Component} from 'react';
import {
    View,
    TextInput,
    Text,
    Image,
    Alert,
    StyleSheet
} from 'react-native';
const Dimensions = require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;


export default class Header extends Component{
    render(){
        return(
            <View style={styles.contain}>
                <Image
                    source={require('../../images/header/header_logo.png')}
                    style={styles.logo}
                >
                </Image>

                <View style={styles.searchBox}>
                    <Image
                        source={require('../../images/header/icon_search.png')}
                        style={styles.search}
                    ></Image>

                    <TextInput
                        placeholder='输入商品名称'
                        style={styles.input}
                    >
                    </TextInput>

                    <Image
                        source={require('../../images/header/icon_voice.png')}
                        style={styles.voice}
                    ></Image>
                </View>

            </View>

        )
    }
}
//const winWidth=window.screen.availWidth;

const styles=StyleSheet.create({

    contain:{
        //flex:1,
        flexDirection:'row',
        backgroundColor:'#d74047',
        marginTop:0,
        height:50,
        paddingLeft: 10,
        paddingRight: 10,
        width:ScreenWidth,
        alignItems:'center',
    },

    logo:{
        height:20,
        width:54,
        resizeMode:'stretch',
    },

    searchBox:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderWidth: 1,
        height:30,
        borderWidth:2,
        borderColor: 'gray',
        marginTop:10,
        borderRadius:5,
        marginLeft:8,
    },

    search:{
        width: 16.7,
        height: 16.7,
        resizeMode: 'stretch'
    },

    input:{
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: 14
    },

    voice:{
        marginLeft: 5,
        marginRight: 8,
        width: 15,
        height: 20,
        resizeMode: 'stretch'
    },
})