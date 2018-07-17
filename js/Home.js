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
import Header from "./Home/Header";
import List from './Home/List';
import Viewpage from './Home/Viewpage';
import Menu from './Home/Menu';
import MarqueeLabel from './Home/Message';
import Like from './Home/Like';
import Details from './Details';

const Dimensions = require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            name:''
        }
   

    }
    
    getName = () => {
        this.setState(name,this.props)
    }

    render(){
        return(
            <View style={styles.contain}>
                <Header/>
                <ScrollView>
                    <Viewpage/>
                    

                    
                    <TouchableOpacity style={{height:60,backgroundColor:'orange',justifyContent: 'center',}}
                            //navigate={this.props.navigation}
                            onPress={() => getName}
                            
                            >
                    
                    </TouchableOpacity>
                    <Menu/>



                    
                    {/*<MarqueeLabel/>*/}
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