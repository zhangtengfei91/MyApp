import React from 'react';
import {
  Text,
  View,
  ReactPage
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Hot from './Hot';
import Food from './Food';

export default () => {
  return <ScrollableTabView
    style={{marginTop: 0, }}
    initialPage={0}
    locked={true    }
    tabBarActiveTextColor='#9B30FF'
    scrollWithoutAnimation={true}
    renderTabBar={() => <ScrollableTabBar />}
  >
        <Hot tabLabel = 'tab1' />
        <Food tabLabel = 'tab2'/>
        <Hot tabLabel = 'tab3' />
        <Hot tabLabel = 'tab4'/>
        <Hot tabLabel = 'tab5' />
        <Hot tabLabel = 'tab6'/>
  </ScrollableTabView>;
}