import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    RefreshControl
} from 'react-native'

import ViewPager from 'react-native-viewpager';

const BANNER_IMGS = [
    require('../../images/swiper/second.jpg'),
    require('../../images/swiper/third.jpg'),
    require('../../images/swiper/fourth.jpg'),
    require('../../images/swiper/first.jpg')
];

export default class Viewpage extends Component {

    constructor(props) {
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 实际的DataSources存放在state中
        this.state = {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS)
        }
    }

    _renderPage(data, pageID) {
        return (
            <Image
                source={data}
                style={styles.page}/>
        );
    }

    render() {
        return (
            <View style={{height:130}}>
                <ViewPager
                    style={{height:130}}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        height: 130,
        resizeMode: 'stretch'
    },
});