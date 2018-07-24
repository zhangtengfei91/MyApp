import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableHighlight,
    Image,
    TouchableOpacity
} from 'react-native';

import {
    StackNavigator,
    
} from 'react-navigation';

import Header from "./Home/Header";
import List from './Home/List';
import Viewpage from './Home/Viewpage';
import Menu from './Home/Menu';
import MarqueeLabel from './Home/Message';
import Like from './Home/Like';


const Dimensions = require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;

export default class Home extends Component{


   
    render(){
        //const {navigate} = this.props.navigation;
        console.log(this)
        return(
            <View style={styles.contain}>
                <Header/>
                    <ScrollView>
                    <Viewpage/>
                    
                    <Menu navigation={this.props.navigation}/>
                    <Like/>
                    <View>
                        <List/>
                    </View>

                </ScrollView>
                
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
        borderWidth:0.5,
        borderColor:'#dcdcdc',
        width:ScreenWidth/4,
        height:ScreenWidth/6,
    },

    icon:{
        height:40,
        width:40
    }

})