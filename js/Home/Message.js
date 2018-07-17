import React,{Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

import MarqueeLabelVertical from 'react-native-lahk-marquee-label-vertical';



export default class Message extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>

                <MarqueeLabelVertical
                    duration={8000}
                    text={'This is a Marquee Label.'}
                    textStyle={{ fontSize: 13, color: 'white' }}
                />
            </View>
        )
    }
}