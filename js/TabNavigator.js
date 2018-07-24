import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    Button
} from 'react-native';

import {
    
    TabNavigator,
    createBottomTabNavigator,
    createTopTabNavigator,
    
} from 'react-navigation';

import {
    StackNavigator,   
} from 'react-navigation';

import  { createStackNavigator }  from 'react-navigation';

import Find from './Home/Viewpage';
import Cart from './Cart';
import Mine from './Home';
import Home from './Home';
import Market from './Market/Market';



// //路由器
const TabRoute={
    Home:{
        screen:Home,
        navigationOptions:{
            
            tabBarLabel:'首页',
            tabBarIcon:({tintColor})=>(
                <Image
                    source={require('../images/tab/首页.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            )
        }
    },
    Find:{
        screen:Find,
        navigationOptions:{
            tabBarLabel:'发现',
            tabBarIcon:({tintColor})=>(
                <Image
                    source={require('../images/tab/发现.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            )
        }
    },
    Cart:{
        screen:Cart,
        navigationOptions:{
            tabBarLabel:'购物车',
            tabBarIcon:({tintColor})=>(
                <Image
                    source={require('../images/tab/购物车.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            )
        }
    },
    Mine:{
        screen:Mine,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon:({tintColor})=>(
                <Image
                    source={require('../images/tab/我的.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            )
        }
    },
}

const TabConfig={
    animationEnabled: false, // 切换页面时是否有动画效果
    swipeEnabled: true, // 是否可以左右滑动切换tab
    tabbarPosition:'bottom',
    animationEnabled:true,
    swipeEnabled: true,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性

    tabBarOptions: {
       
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: '#EB3695',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 55,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 5,
        }
    }
}
//修改tabnavigator警告的问题，此方法已经过期!!!!!
const   Tab = createBottomTabNavigator(TabRoute,TabConfig);

// class Test extends Component{

//     static navigationOptions = {
//         title: 'Welcome'
//       };

//       render() {
//         const {navigate} = this.props.navigation;
//         return <View>
//           <Text>Hello, Chat App!</Text>
//           <Button
//               onPress={() => navigate('Chat', {user: 'Lucy'})}
//               title="Chat with Lucy"
//           />
//         </View>
//       }
// }

const styles=StyleSheet.create({
    contain:{
        flex:1,
    }
})

const StackNavigatorConfig = {
    //initialRouteParams: {headerMode: 'none'},
    headerMode:'screen',
    header:null,

}



export default  RootNavigator = createStackNavigator({
    Home: {
      screen: Tab,
      navigationOptions:{
          header:null
      }
      
    },
    Chat: {
      screen: Market,
    },
  },StackNavigatorConfig);






