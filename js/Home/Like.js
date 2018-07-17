import React,{Component} from 'react';
import {
    View,
    Text,
    Stylesheet,
    StyleSheet,
    Image
} from 'react-native';

const Dimensions = require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;


export default class Like extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
            
                <Text style={styles.title}>猜你喜欢</Text>

                <View style={styles.box1}>
                    <View style={{borderWidth:0.5,borderColor:'#dcdcdc',width:ScreenWidth/2,flex:1,alignItems:'center'}}>
                        <Image  source={require('../../images/like/1.jpg')} style={styles.picbig}/>
                    </View>
                    <View style={{borderWidth:0.5,borderColor:'#dcdcdc',width:ScreenWidth/2,flex:1,alignItems:'center'}}>
                        <Image source={require('../../images/like/2.jpg')} style={styles.picbig}/>
                    </View>
                </View>

                <View style={styles.box2}>
                    <View style={styles.box3}>
                        <Text style={styles.title2}>京东试用</Text>
                        <Image style={styles.title2} source={require('../../images/like/3.jpg')} style={styles.picsml}></Image>
                    </View>
                    <View  style={styles.box3}>
                        <Text style={styles.title2} >拍拍二手</Text>
                        <Image source={require('../../images/like/4.jpg')} style={styles.picsml}></Image>
                    </View>
                    <View style={styles.box3}>
                        <Text style={styles.title2} >京东拍卖</Text>
                        <Image source={require('../../images/like/5.jpg')} style={styles.picsml}></Image>
                    </View>
                    <View style={styles.box3}>
                        <Text style={styles.title2} >京东拼购</Text>
                        <Image source={require('../../images/like/6.jpg')} style={styles.picsml}></Image>
                    </View>
                    <View style={styles.box3}>
                        <Text style={styles.title2} >男装馆</Text>
                        <Image source={require('../../images/like/7.jpg')} style={styles.picsml}></Image>
                    </View>
                    <View style={styles.box3}>
                        <Text style={styles.title2} >电脑办公</Text>
                        <Image source={require('../../images/like/8.jpg')} style={styles.picsml}></Image>
                    </View>
                    <View style={styles.box3}>
                        <Text style={styles.title2} >手机管</Text>
                        <Image source={require('../../images/like/9.jpg')} style={styles.picsml}></Image>
                    </View>
                    <View style={styles.box3}>
                        <Text style={styles.title2} >生鲜管</Text>
                        <Image source={require('../../images/like/10.jpg')} style={styles.picsml}></Image>
                    </View>
                </View>
            </View>
        )
    }


}

const styles = StyleSheet.create({
//const styles = Stylesheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },

        title:{ 
            color:'#696969',
            fontFamily:'Cochin',
            backgroundColor:'#00ffff',           
        },

        box1:{
            flexDirection:'row',
            justifyContent:'space-around',
        },
        picbig:{
            width:ScreenWidth/2.1,
            height:80,
            margin:5

            
        },

        picsml:{
            width:ScreenWidth/4.5,
            height:50
        },

        box2:{
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-around',
            margin:5

        },

        box3:{
            borderWidth:0.5,
            borderColor:'#dcdcdc',
            //justifyContent:'center',
            alignItems:'center'
        },

        title2:{
            color:'#696969',
            fontFamily:'Cochin',
            //backgroundColor:'#00ffff',  
        }

    }
)