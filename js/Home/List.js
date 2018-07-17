import React,{Component} from 'react';
import {
    View,
    SectionList,
    Text,
    Alert,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';


const Dimensions = require('Dimensions');
const ScreenWidth = Dimensions.get('window').width;
export default class List extends Component{
    constructor(props){
        super(props);
    }

    _renderHeader(info){
        const key = info.section.key;
        return(
            <View>
                <Text style={styles.key}>{key}</Text>
            </View>

            )
    }

    _renderItems(info){
        const txt = info.item.title;
        const image = info.item.image;
        return(
            <Text style={styles.txt}>
                {txt}
            </Text>

        )
    }

    _keyExtractor(item,index){
        return "index"+index+item;
    }

    render(){
        return(
            <View style={styles.container}>
                <SectionList
                    ListHeaderComponent = {()=>{return(
                        <View>

                        </View>
                        )}}
                    keyExtractor={this._keyExtractor}
                    style = {styles.list}
                    renderItem = {this._renderItems}
                    renderSectionHeader = {this._renderHeader}

                    sections = {
                        [ // 不同section渲染相同类型的子组件
                            {data: [{title: 'Will'}, {title: 'Javion',image:'../../images/icon/food.png'}, {title: 'Cater'}], key: '猜你想要'},
                            {data: [{title: 'Will'}, {title: 'Javion'}, {title: 'Cater'}], key: '东家小院'},
                            {data: [{title: 'Will'}, {title: 'Javion'}, {title: 'Cater'}], key: '一小时达'},
                            {data: [{title: 'Will'}, {title: 'Javion'}, {title: 'Cater'}], key: '校园优惠'},
                            {data: [{title: 'Will'}, {title: 'Javion'}, {title: 'Cater'}], key: '潮玩先锋'},
                            {data: [{title: 'Will'}, {title: 'Javion'}, {title: 'Cater'}], key: '品质生活'},

                        ]
                    }
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container:{
        //flex:1,
        alignItems:'center',
        justifyContent:'center',
    },

    list:{
        width:ScreenWidth,
    },

    key:{
        height: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#9CEBBC',
        color: 'white',
        fontSize: 20
    },

    txt:{
        height: 60,
        textAlignVertical: 'center',
        backgroundColor: "#ffffff",
        color: '#5C5C5C',
        fontSize: 15
    }
})